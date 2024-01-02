export const AUTH_EMAIL_REGUALR_EXPRESSION = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
export function isValidEmail(email) {
    if (new RegExp(AUTH_EMAIL_REGUALR_EXPRESSION).test(email)) {
        return true;
    }
    return false;
};