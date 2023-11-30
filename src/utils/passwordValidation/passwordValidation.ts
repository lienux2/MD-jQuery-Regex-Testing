export function passwordValidation(password: string) {
    if (/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(password)) {
        return true;
    } else {
        return false;
    }
};