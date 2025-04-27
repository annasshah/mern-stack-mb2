import React, { useState } from 'react'
import InputComponent from './InputComponent'
import RadioButton from './RadioButton'

const SignupForm = ({submitForm}) => {
    const [formData, setFormData] = useState({})

    const submitHandle = (e) => {
        e.preventDefault()
        console.log('Form submitted')
        submitForm(formData)
        // e.target.reset()

    }

    const changeHandle = (key, value) => {

        // const updatedFormData = {
        //   ...formData,
        //   [key]:value
        // }
        // setFormData(updatedFormData)

        // setFormData(()=> {

        //   return {
        //     ...formData,
        //     [key]:value
        //   }
        // })

        setFormData((preForm) => {
            return {
                ...preForm,
                [key]: value
            }
        })
    }

    console.log(formData)

    // const setEmailHandle = (e) => {
    //   const value = e.target.value
    // }
    // const setNameHandle = (e) => {
    //   const value = e.target.value
    // }
    return (
        <div>

           



            <div className='h-full grid place-items-center'>
                <h1 className='mb-4'>Sign up</h1>
                <form onSubmit={submitHandle} className='max-w-lg space-y-5 '>
                    <InputComponent onChange={(e) => changeHandle('name', e.target.value)} required placeholder='Enter your name' />
                    <InputComponent onChange={(e) => changeHandle('email', e.target.value)} required type='email' placeholder='Enter email' />
                    <InputComponent onChange={(e) => changeHandle('password', e.target.value)} required type='password' placeholder='Enter password' />

                    <RadioButton
                        options={['male', 'female']}
                        label='Gender'
                        name='gender'
                        onChange={(e) => changeHandle('gender', e.target.value)}

                    />





                    <button type='submit'>
                        Submit Form
                    </button>
                </form>
            </div>

        </div>)
}

export default SignupForm
