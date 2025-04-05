import { Card } from "./Card"
import { productDataList } from '../../../utils/data'
import { SelectCategory } from './SelectCategory'
import { useState } from "react"

const ProductsList = () => {
    const [dataList, setDataList] = useState(productDataList)


    const selectCategoryHandle = (e) => {
        const selectedCategory = e.target.value

        let filteredData

        if (selectedCategory === '') {
            filteredData = productDataList
        } else {
            filteredData = productDataList.filter((product) => product.category.name === selectedCategory)

        }


        setDataList(filteredData)

        console.log(selectedCategory)

    }




    return <div className=" my-6 container  mx-auto ">

        <div className="my-3">
            <SelectCategory selectHandle={selectCategoryHandle} />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {
                dataList.map((elem, index) => <Card key={index} data={elem} />)
            }
        </div>
    </div>



}

export default ProductsList