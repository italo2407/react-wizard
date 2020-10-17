interface WizardProps {
    steps?: any
    children?: any
    initialValues?: object
}

interface StepProps {
    children: (props: any) => React.ReactElement
    nextStep?: () => void
    prevStep?: () => void
    goToStep?: () => void
    currentIndex?: number
    onChangeValue?: (name: string, value: string) => void
    values?: {}
}

interface HeaderProps {
    currentIndex: number,
    size: number
}

interface ButtonProps {
    nextStep?: () => void
    prevStep?: () => void
    currentIndex?: number
    isLast?: boolean,
    isNextDisabled?: boolean
    prevButtonLabel?: string
    nextButtonLabel?: string
}

interface PasswordProps {
    id: string
    label: string
    placeholder: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    score?: boolean,
    message: string
}

export {
    ButtonProps,
    HeaderProps,
    PasswordProps,
    StepProps,
    WizardProps
}