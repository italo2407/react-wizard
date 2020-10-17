import * as React from "react"
import useWizard from "../../hooks/useWizard"
import { WizardProps, StepProps } from "../../types/WizardTypes"
import Header from "./Header"
import Step from "./Step"


const WizardContext = React.createContext(null)

const Wizard = (props: WizardProps) => {
  const { children, initialValues } = props

  const steps = React.Children.toArray(children)

  const {
    nextStep,
    prevStep,
    goToStep,
    index,
    size,
    onChangeValue,
    values
  } = useWizard({
    initialValues,
    size: steps.length
  })

  const value = React.useMemo(
    () => ({
      currentIndex: index,
      prevStep,
      nextStep,
      goToStep,
      size,
      onChangeValue,
      values,
      isLast: index === steps.length - 1
    }),
    [index]
  ) 

  const activeStep = steps[index]

  return Boolean(activeStep) ? (
    <WizardContext.Provider value={value}>
        <Header size={size} currentIndex={index} />
        {activeStep}
    </WizardContext.Provider>
  ) : null
}

function useWizardContext() {
  const context = React.useContext(WizardContext)

  if (!context) {
    throw new Error(
      `Wizard compound components cannot be rendered outside the Wizard component`
    )
  }
  return context
}

const WizardStep = (props: StepProps) => <Step {...useWizardContext()} {...props}/>

export {
    Wizard,
    WizardStep
}
