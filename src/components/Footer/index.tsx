import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ButtonProps } from "../../types/WizardTypes"
import "./style.scss"

const Buttons = ({currentIndex, nextStep, prevStep, isLast, isNextDisabled, nextButtonLabel}: ButtonProps) => {

    const next = (e: React.FormEvent)  => {
        e.preventDefault();
        nextStep();
    }

    const prev = (e: React.FormEvent) : void => {
        e.preventDefault();
        prevStep();
    }

    const btnPrevious = () => {
        return (
            <button className={`previous ${isLast ? 'hide' : ''}`} onClick={prev}>
                Cancelar 
            </button>
        )
    }

    const btnNext = () => {
        return (
            <button className={isLast ? 'last' : 'next'} onClick={next} disabled={isNextDisabled}>
                {isLast ? nextButtonLabel : 'Siguiente'}
                &nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>
            </button>
        )
    } 
    return (
        <div className="buttons">
            <hr/>
            <div className={`buttons-content ${isLast ? 'justify-end' : 'justify-space'}`}>
                { btnPrevious() }
                { btnNext() }
            </div>
        </div>
    )
}

export default Buttons;