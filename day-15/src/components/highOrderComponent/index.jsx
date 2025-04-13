import React from 'react'
import ParentComponent from './ParentComponent'
import RenderComponent from './RenderComponent'

const HighOrderComponent = () => {
  return (
    <div>
     <ParentComponent Component={RenderComponent} />
    </div>
  )
}

export default HighOrderComponent
