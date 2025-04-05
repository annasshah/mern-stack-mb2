import React from 'react'
import PropsOfComponent from './PropsOfComponent'


const listOfNames = [
    "Ahsan", "Hassan", "Asad",  "Hassan", "Asad"
  ]
  

const RecapComponent = () => {
  return (
     <div>

    {/* <h1 className="text-xl text-red-700">Hello world</h1> */}

    {/* <PropsOfComponent userName={"Ahsan"}  />
    <PropsOfComponent userName={"Asad"}  />
    <PropsOfComponent userName={"Hassan"}  />
    <PropsOfComponent userName={"Khurram"}  /> */}


    {
      listOfNames.map((userName) => {
        return <PropsOfComponent userName={userName} />
      })
    }

  </div>
  )
}

export default RecapComponent
