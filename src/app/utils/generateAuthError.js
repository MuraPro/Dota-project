export function generateAuthError(message) {
    switch (message) {
        case 'INVALID_PASSWORD':
            return 'Email или пароль введены некорректно';
        case 'EMAIL_EXISTS':
            return 'Пользователь с таким Email уже существует';
        case 'INVALID_LOGIN_CREDENTIALS':
            return 'Email или пароль введены некорректно';
        default:
            return 'Слишком много попыток входа. Попробуйте позже';
    }
}
