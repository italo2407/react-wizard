import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { HeaderProps } from "../../../types/WizardTypes"
import "./style.scss";

const Header = ({ currentIndex, size }: HeaderProps) => {
    const items = [];
    for (let step=0 ; step < size; step++) {
        const doneStep = step < currentIndex || currentIndex ==  size - 1 ;
        const doneClass =  doneStep ? 'done' : ''; 
        const currentClass = step == currentIndex && step !== size - 1 ? 'current' : '';
        items.push(<li key={step} className={`${currentClass} ${doneClass}`}>
                        <a>
                            <span className="step circle">
                                { doneStep ? <FontAwesomeIcon icon={faCheck} /> : step + 1}
                            </span>
                        </a>
                    </li>);
    }
    return (
        <div className="wizard">
            <div className="steps">
                <ul>
                    {items}
                </ul>
            </div>
        </div>            
    );
}

export default Header;