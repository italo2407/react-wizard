import React, { FormEvent, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { PasswordProps } from "../../types/WizardTypes"
import Utils from "../../utils"
import "./style.scss"


const Password = ({id, label, placeholder, onChange, score: scoreEnable, message}: PasswordProps) => {

    const [isShow, setIsShow] = useState(false);
    const [score, setScore] = useState();
    
    const showHidePasswordMask = (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsShow(!isShow)
    }

    const _onChange = (e: FormEvent<HTMLInputElement>) => {
        onChange(e);
        const _score = Utils.passwordStrengthScore(e.currentTarget.value);
        setScore(_score);
    }

    return (
        <div>
            <label className="password">{label}
                <input id={id} type={isShow ? 'text' : 'password'} className="password-input" onChange={_onChange} placeholder={placeholder}/>
                <span className="password-eye" onClick={showHidePasswordMask}>
                    {
                        isShow ?
                        <FontAwesomeIcon icon={faEyeSlash}/> :
                        <FontAwesomeIcon icon={faEye}/>
                    }
                </span>
                {
                    scoreEnable &&  <span className="password-strength" data-score={score} />
                }
            </label>
            {
                message && <span className="validation-message">{message} </span>
            }
        </div>
    )
}

export default Password;