import {useState} from "react";
import { Button } from "../button/Button";
import {CodeInput} from "../codeInput/CodeInput";
import {Input} from "../input/Input";

export const Stepper = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        codeInput: [],
        email: '',
        accountType: '',
        restaurant: '',
        orgname: '',
        companyLogo: '',
        suceess: false,
    })

    const nextStep = () => {
        setStep((prev: number) => prev + 1)
    }

    const handleChange = (input: string, formatPhone?:any) => (e: React.ChangeEvent<HTMLInputElement>) => {
        // phone: formatPhone(e.target.value)
        setFormData({...formData, [input] : input === 'phone' ? formatPhone(e.target.value) : e.target.value})
    }

    const test = (value:any) => {
        setFormData({...formData, codeInput: value})
    };

    const sub = (e:any) => {
        e.preventDefault()
        console.log(formData)
    }
    const formatPhone = (phone:string) => {
        if(!phone) return phone
        const phoneNumber = phone.replace(/[^\d]/g, '')
        const phoneNumberLength = phoneNumber.length
        if(phoneNumberLength < 4) return phoneNumber
        if(phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`
        }
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`
    }
    // console.log(!!formData.fullName && !!formData.phone)
    // console.log(!formData.fullName)
    // console.log(!formData.phone)h

    const formContentRender = () => {
        switch (step) {
            case 1 :
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:400
                    }}>
                        <Input
                            value={formData.fullName}
                            onChange={handleChange('fullName')}
                            type={'text'}
                            placeholder={'What is your full name?'}
                        />
                        <Input
                            valid={formData.phone.replace(/[^\d]/g, '').length  === 10}
                            type="text" value={formData.phone}
                            onChange={handleChange('phone', formatPhone)}
                            placeholder={'What is your full name?'}
                        />
                        <Button onClick={nextStep} disabled={!formData.fullName || !formData.phone}>Create your first Work Order</Button>
                    </div>
                )
            case 2 :
                return (
                    <div>
                        <CodeInput test={test} value={formData.codeInput}/>
                        <button type='submit'>final</button>
                    </div>
                )
            default: return <div>loh</div>
        }
    }

    return (
        <form onSubmit={sub}>
            {formContentRender()}
        </form>
    )
}
