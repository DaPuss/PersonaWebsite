import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Button from '../Button/Button'
import Input from '../Input/Input'
const Contact = () => {
    //Email input form containing a field for email address, subject and message with a button to submit
    return (
        <Section id="contact">
            <SectionHeader count={4} title={'Contact Me'} />
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row gap-6 before:content-none">
                                <Input
                                    type="email"
                                    placeholder="Big.Ceo@company.com"
                                    label={'Email'}
                                />
                                <Input
                                    type="text"
                                    placeholder="Big job offer..."
                                    label={'Subject'}
                                />
                            </div>
                            <Input
                                textArea
                                placeholder="Hi Dylan, we would like to offer you..."
                                label={'Message'}
                            />
                            <Button type="submit">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Contact
