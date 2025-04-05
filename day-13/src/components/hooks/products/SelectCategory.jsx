import React from 'react'
import { categoryList } from '../../../utils/data'

export const SelectCategory = ({selectHandle}) => {
  return (
    <select onChange={selectHandle} >
      <option value={''}>
            Select Category
        </option>
        {categoryList.map((cat)=> {
          

            return <option value={cat.name}>
            {cat.name}
        </option>
        }) }
    
    </select>
  )
}

