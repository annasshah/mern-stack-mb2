import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { axiosInstance } from '../config/axiosInstace'

const Products = () => {
  // const cardDataArray = [
  //   {
  //     title: 'Classic Black Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 80,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },
  //   {
  //     title: 'Classic Black Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 79,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },
  //   {
  //     title: 'Classic Red Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 79,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },
  //   {
  //     title: 'Classic Black Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 79,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },
  //   {
  //     title: 'Classic Black Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 79,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },
  //   {
  //     title: 'Classic Black Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 79,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },
  //   {
  //     title: 'Classic Black Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 79,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },
  //   {
  //     title: 'Classic Black Hooded Sweatshirt',
  //     category: 'Clothes',
  //     description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
  //     price: 79,
  //     thumbnil: 'https://imgur.com/cSytoSD'
  //   },


  // ]


  const [dataList, setDataList] = useState([])


  useEffect(() => {

    axiosInstance.get('/products').then((res)=>{
      const resData = res.data
      console.log(resData)
      setDataList(resData)
    })

  }, [])
  





  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 ">

    {
      dataList.map((elem, index) => <ProductCard key={index} data={elem} />)
    }
  </div>
}

export default Products



// JSON.stringify
// JSON.parse