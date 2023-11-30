export function nameValidation(name: string) {
    if (name.length < 2) {
        return false;
    } else if (name.length > 50) {
        return false;
    }
    else if (/^[a-zA-Z]+$/.test(name)) {
        return true;
    } else {
        return false;
    }
}; 