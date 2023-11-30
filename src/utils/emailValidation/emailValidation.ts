export function emailValidation(email: string) {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        return true;
    } else {
        return false;
    }
  };