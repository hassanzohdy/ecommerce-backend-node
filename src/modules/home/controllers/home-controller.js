import path from 'path';
import validator from 'core/validator';

export function showHome(request, response) {
    response.sendFile(path.resolve(__dirname + '/../views/form.html'));
}

export function submitForm(request, response) {
    let validator = validate();

    if (validator.isValid) {
        // pass
        response.send(request().body);
    } else {
        // failed 
        response.send({
            errors: validator.errors,
        });
    }
}

function validate() {
    return validator.make({
        name: validator.input().required('Name Is Required'),
        email: validator.input().required().email(),
        password: validator.input().required().minLength(10),
        confirmPassword: validator.input().match('password'),
    });
}