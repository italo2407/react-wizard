import React from "react";
import Step1 from "./views/ProductInformation/index";
import Step2 from "./views/Form";
import Step3 from "./views/Feedback";
import {Wizard, WizardStep} from "./components/Wizard";

import "./App.scss";

const App = () => {

    
    return(
        <div className="App shadow">
            <Wizard>
                <WizardStep>
                    {(props) => <Step1 {...props} />}
                </WizardStep>

                <WizardStep>
                    {(props) => <Step2 {...props} />}
                </WizardStep>
                <WizardStep>
                    {(props) => <Step3 {...props} />}
                </WizardStep>
            </Wizard>
        </div>
    );
}

export default App;

