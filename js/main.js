function removeFieldError(field) {
...
};

function createFieldError(field, text) {
  ...
};


function createFieldError(field, text) {
    removeFieldError(field);
};

function removeFieldError(field) {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("form-error-text")) {
            errorText.remove();
        }
    }
}

function toggleErrorField(field, show) {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("form-error-text")) {
            errorText.style.display = show ? "block" : "none";
            errorText.setAttribute('aria-hidden', show);
        }
    }
};

function markFieldAsError(field, show) {
    if (show) {
        field.classList.add("field-error");
    } else {
        field.classList.remove("field-error");
        toggleErrorField(field, false);
    }
};

const form = document.querySelector("form");
const inputName = form.querySelector("input[name=name]");
const inputLastname = form.querySelector("input[name=lastname]");
const inputEmail = form.querySelector("input[name=email]");
const inputs = [inputName, inputEmail, inputLastname];

form.setAttribute("novalidate", true);

for (const el of inputs) {
    el.addEventListener("input", e => markFieldAsError(e.target, !e.target.checkValidity()));
}

form.addEventListener("submit", e => {
    e.preventDefault();

    let formHasErrors = false;

    for (const el of inputs) {
        removeFieldError(el);
        el.classList.remove("field-error");

        if (!el.checkValidity()) {
            createFieldError(el, el.dataset.textError);
            el.classList.add("field-error");
            formHasErrors = true;
        }
    }

    if (!formHasErrors) { 
        e.target.submit();
    }
});