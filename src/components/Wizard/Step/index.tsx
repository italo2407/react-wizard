import { StepProps } from "../../../types/WizardTypes"

const Step = ({ children, ...rest }: StepProps) => {
    return children({ ...rest })
}
  
export default Step