import React, { useState } from 'react'
import InputComponent from './InputComponent'

const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const RegexExpression = () => {
    const [password, setPassword] = useState('')
    const [passed, setPassed] = useState(false)
    const [checked, setChecked] = useState(false)

    const testPasswordValidation = () => {

        const iscorrectPattern = passwordPattern.test(password)
        if (iscorrectPattern) {
            setPassed(true)
        }

        setChecked(true)
    }
    return (
        <div>
            <InputComponent onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            {!passed && checked ? <span className='text-red-600'>Failed validation</span> : null}
            {passed && checked ?  <span className='text-green-600'>Passed validation</span> :null}

            <button className='block' onClick={testPasswordValidation}>Test</button>
        </div>
    )
}

export default RegexExpression
