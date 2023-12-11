const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateInviteInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.permissions = !isEmpty(data.permissions) ? data.permissions : "";
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.permissions)) {
        errors.password = "Permissions field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};