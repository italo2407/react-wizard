import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import Utils from "../../utils"
import "./style.scss"

const Message = ({success} : any) => {
    return (
        <div className="result">
            <div className="icon">
                { success ? 
                    <FontAwesomeIcon icon={faCheckCircle} className="icon-success" /> :
                    <FontAwesomeIcon icon={faExclamationTriangle} className="icon-failed" />
                }  
            </div>
            <div className="message">
                <h1>{success ? Utils.SUCCES_TITLE : Utils.FAILED_TITLE}</h1>
                <p>{success ? Utils.SUCCES_MESSAGE : Utils.FAILED_MESSAGE}</p>
            </div>
        </div>
    )
}

export default Message;