import React from 'react'

const InputComponent = ({name,  ...props}) => {
  return (
    <div>
      <input className='w-full py-2 px-2 border border-gray-400 rounded-md focus:outline-none' {...props} />
    </div>
  )
}

export default InputComponent


// const {placeholder, name, ...otherProps } = props