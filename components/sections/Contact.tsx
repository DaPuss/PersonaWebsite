import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface EmailForm {
    name: string
    subject: string
    email: string
    message: string
}
const Contact = () => {
    //Email input form containing a field for email address, subject and message with a button to submit

    const [errors, setErrors] = useState<EmailForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [formState, setFormState] = useState<EmailForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleValidation = (field: keyof typeof formState) => {
        let newError = ''
        let formIsValid = true
        const fieldValue = formState[field].trim()

        if (!fieldValue) {
            formIsValid = false
            newError = `${field} is required`
        }
        if (field === 'email' && fieldValue) {
            const lastAtPos = fieldValue.lastIndexOf('@')
            const lastDotPos = fieldValue.lastIndexOf('.')

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fieldValue.indexOf('@@') == -1 &&
                    lastDotPos > 2 &&
                    fieldValue.length - lastDotPos > 2
                )
            ) {
                formIsValid = false
                newError = 'Email is not valid'
            }
        }

        return { newError, formIsValid }
    }

    const handleChange = (
        field: keyof typeof formState,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFormState({ ...formState, [field]: e.target.value })
        const { newError, formIsValid } = handleValidation(field)
        formIsValid
            ? setErrors({ ...errors, [field]: '' })
            : setErrors({ ...errors, [field]: newError })
    }

    const validateAll = (): {
        errorObject: EmailForm
        formIsValid: boolean
    } => {
        const name = handleValidation('name')
        const email = handleValidation('email')
        const subject = handleValidation('subject')
        const message = handleValidation('message')
        const errorObject = {
            name: name.newError,
            email: email.newError,
            subject: subject.newError,
            message: message.newError,
        }
        const formIsValid =
            name.formIsValid &&
            email.formIsValid &&
            subject.formIsValid &&
            message.formIsValid
        return { errorObject, formIsValid }
    }

    const contactSubmit = (
        e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        const { errorObject, formIsValid } = validateAll()

        if (formIsValid) {
            sendEmail()
        } else {
            setErrors(errorObject)
        }
    }
    const sendEmail = () => {
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ?? '',
                process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATEID ?? '',
                {
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    subject: formState.subject,
                },
                process.env.NEXT_PUBLIC_EMAIL_JS_KEY
            )
            .then(
                (result: any) => {
                    console.log(result.text)
                    setFormState({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    })
                },
                (error: any) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <Section id="contact">
            <SectionHeader count={4} title={'Get In Touch'} />
            <form
                className="flex flex-col gap-6"
                onSubmit={contactSubmit.bind(this)}
            >
                <div className="flex flex-col gap-3 md:flex-row md:gap-6  before:content-none">
                    <Input
                        type="text"
                        placeholder="John-117 "
                        label={'Name'}
                        handleChange={handleChange.bind(this, 'name')}
                        value={formState['name']}
                        error={errors.name}
                    />
                    <Input
                        type="email"
                        placeholder="Big.Ceo@company.com"
                        label={'Email'}
                        handleChange={handleChange.bind(this, 'email')}
                        onBlur={handleChange.bind(this, 'email')}
                        value={formState['email']}
                        error={errors.email}
                    />
                    <Input
                        type="text"
                        placeholder="Big job offer..."
                        label={'Subject'}
                        handleChange={handleChange.bind(this, 'subject')}
                        onBlur={handleChange.bind(this, 'subject')}
                        value={formState['subject']}
                        error={errors.subject}
                    />
                </div>
                <Input
                    textArea
                    placeholder="Hi Dylan, we would like to offer you..."
                    label={'Message'}
                    handleChange={handleChange.bind(this, 'message')}
                    value={formState['message']}
                    error={errors.message}
                />
                <Button type="submit" onClick={contactSubmit.bind(this)}>
                    Submit
                </Button>
            </form>
        </Section>
    )
}

export default Contact
