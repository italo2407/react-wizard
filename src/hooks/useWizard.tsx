import { useState } from "react"

function useWizard({
  initialValues = {},
  size = 2
} = {}) {
  const [index, setIndex] = useState(0)
  const [values, setValues] = useState({ ...initialValues })

  const prevStep = () => {
    if (index <= 0) return
    setIndex(index - 1)
  }

  const nextStep = () => {
    if (index >= size - 1) return
    setIndex(index + 1)
  }

  const goToStep = (step: number) => {
    if (step >= size - 1) return
    setIndex(step)
  }

  const onChangeValue = (name: string, value: string) => {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value
    }))
  }

  return {
    nextStep,
    prevStep,
    goToStep,
    index,
    size,
    onChangeValue,
    values
  }
}

export default useWizard