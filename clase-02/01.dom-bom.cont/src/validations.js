export function validarNombre(nombre) {
    return nombre === ''
}

export function validarEmail(email) {
    return email.includes('@')
}

export function validarEdad(edad) {
    return edad < 18 || edad === '' // TODO: Mejorar esto
}