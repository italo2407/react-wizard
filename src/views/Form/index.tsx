import React, { FormEvent, useState } from "react";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import Utils from "../../utils";
import "./style.scss"
import Password from "../../components/Password";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialState = {
    password: '',
    confirmPassword: '',
    pistaText: '',
    passwordError:'',
    confirmPasswordError:''
}

const Step2 = (props: any) => {
    const { currentIndex, nextStep, prevStep, isLast, onChangeValue } = props;
    const [ formData, setFormData ] = useState(initialState)

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setFormData({
            ...formData,
            [e.currentTarget.id] : value
        });
        onChangeValue(e.currentTarget.id, value);
    }

    const _nextStep = () => {
        //Field Validation
        const passwordError = Utils.validatePasswordRules(formData.password) ? '' : Utils.PASSWORD_ERROR_MESSAGE;
        const confirmPasswordError = formData.password == formData.confirmPassword ? '' : Utils.CONFIRM_PASSWORD_ERROR_MESSAGE; 

        if(passwordError || confirmPasswordError){
            setFormData({
                ...formData,
                passwordError,
                confirmPasswordError
            })
            return;
        }
        nextStep();
    }

    return (
        <React.Fragment>
            <div id="step2">
                <Title title={Utils.TITLE}/>
                <p>
                    En primer lugar, debes crear una contraseña diferente para sus pertenencias electronicas.
                    No podrás recuperar tu contraseña, así que recuerdala bien.
                </p>

                <p>
                    Tambien puedes crear una pista que te ayuda a recordar tu contraseña maestra.
                </p>
                <div className="passwords">
                    <Password id="password" label={Utils.PASSWORD_LABEL} onChange={onChange} score placeholder="Ingresa tu contraseña" message={formData.passwordError} />
                    <br />
                    <Password id="confirmPassword" label={Utils.CONFIRM_PASSWORD_LABEL} onChange={onChange}  placeholder="Repite tu contraseña" message={formData.confirmPasswordError}/>
                </div>
                <br />
                <h3>
                    Crea tu pista para recordar tu contraseña (opcional) <FontAwesomeIcon icon={faInfoCircle} style={{color: "#76CFF9"}}/>
                </h3>
                <input type="text" className="pista-input" maxLength={255} />

            </div>
            <Footer currentIndex={currentIndex} nextStep={_nextStep} prevStep={prevStep} isLast={isLast} />
        </React.Fragment>
    )
}


export default Step2;