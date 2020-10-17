import React, {useState, useEffect} from "react";
import Message from "../../components/Message";
import Footer from "../../components/Footer";
import { submitForm } from "../../services/api";
import loader from "../../assets/img/ajax-loader.gif"
import "./style.scss"
import Utils from "../../utils";

const initialState = {
    status: false,
    loading: true
}
const Step3= (props: any) => {
    const [state, setState, ] = useState(initialState);
    const { goToStep, isLast, values } = props;

    useEffect(() => {
        submitForm(values.password)
            .then(() => 
                setState({
                    ...state,
                    status: true,
                    loading: false
            })).catch(() =>
                setState({
                    ...state,
                    status: false,
                    loading: false
            }))
      }, [])
    
    const _nextStep = () => {
        if (state.status) return alert("Ya puede acceder a sus contraseñas!");
        goToStep(0);
    }

    const labelButton = state.status ? Utils.SUCCES_LABEL_BUTTON : Utils.FAILED_LABEL_BUTTON;

    return (
        <React.Fragment>
            { state.loading ?
                <div className="loading">
                    <img src={loader} /> 
                </div> :
                <React.Fragment>
                    <div id="step3">
                        <Message success={state.status} />
                    </div>
                    <Footer nextStep={_nextStep} isLast={isLast} nextButtonLabel={labelButton}/>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Step3;