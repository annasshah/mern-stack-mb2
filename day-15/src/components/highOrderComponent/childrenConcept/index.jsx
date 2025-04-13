import React from 'react'
import MainComponent from './MainComponent'
import RenderAsAChild from './RenderAsAChild'

const ChildrenConcept = () => {
  return (
    <div>
        <MainComponent>
            {/* <h1>
                THis is the inside of the main component
            </h1> */}
            <RenderAsAChild />
        </MainComponent>

        <MainComponent children={<RenderAsAChild />} />
    </div>
  )
}

export default ChildrenConcept
