const zxcvbn = require("zxcvbn")

const Utils : any = {}
Utils.TITLE = "Crea tu Password Manager"
Utils.PASSWORD_LABEL = "Crea tu Contraseña Maestra"
Utils.CONFIRM_PASSWORD_LABEL = "Repite tu Contraseña Maestra"
Utils.PASSWORD_ERROR_MESSAGE = "Password no cumple con reglas"
Utils.CONFIRM_PASSWORD_ERROR_MESSAGE = "Passwords no coinciden"
Utils.SUCCES_TITLE = "¡ Tu Password Manager ya esta creado! "
Utils.SUCCES_MESSAGE = "Tu Password Manager ya se ha creado exitosamente. Vamos a poder ingresar con seguridad"
Utils.FAILED_TITLE = "Ha habido un error"
Utils.FAILED_MESSAGE = "No hemos podido modificar tu contraseña maestra. Intentalo más tarde"
Utils.SUCCES_LABEL_BUTTON = "Acceder"
Utils.FAILED_LABEL_BUTTON = "Volver al password manager"

Utils.passwordStrengthScore  = (value: string) => {
    if(!value) return null;

    const pw = zxcvbn(value);
    return pw.score;
}

Utils.validatePasswordRules = (value: string) => {
    /* Al menos 1 minuscula
       Al menos 1 mayuscula
       Al menos 1 número
       Entre 8 - 24 caracteres */
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,24})");
    return regex.test(value)
} 

export default Utils;