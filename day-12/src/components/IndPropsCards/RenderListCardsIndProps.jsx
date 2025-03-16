import { IndPropsCard } from "./IndPropsIndPropsCard"

export const RenderListCardsIndProps = () => {
    const cardDataArray = [
        {
            title: 'Classic Black Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 80,
            thumbnil: 'https://imgur.com/cSytoSD'
        },
        {
            title: 'Classic Black Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 79,
            thumbnil: 'https://imgur.com/cSytoSD'
        },
        {
            title: 'Classic Red Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 79,
            thumbnil: 'https://imgur.com/cSytoSD'
        },
        {
            title: 'Classic Black Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 79,
            thumbnil: 'https://imgur.com/cSytoSD'
        },
        {
            title: 'Classic Black Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 79,
            thumbnil: 'https://imgur.com/cSytoSD'
        },
        {
            title: 'Classic Black Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 79,
            thumbnil: 'https://imgur.com/cSytoSD'
        },
        {
            title: 'Classic Black Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 79,
            thumbnil: 'https://imgur.com/cSytoSD'
        },
        {
            title: 'Classic Black Hooded Sweatshirt',
            category: 'Clothes',
            description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
            price: 79,
            thumbnil: 'https://imgur.com/cSytoSD'
        },


    ]

    
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 ">
        {/* {
            cardDataArray.map((elem) => {
                // const {
                //     title,
                //     category,
                //     description,
                //     price,
                //     thumbnil,
                // } = elem
                return <IndPropsCard title={elem.title} category={elem.category} description={elem.description} price={elem.price} thumbnil={elem.thumbnil} />
                

            })
        } */}
        {/* {
            cardDataArray.map((elem) => <IndPropsCard title={elem.title} category={elem.category} description={elem.description} price={elem.price} thumbnil={elem.thumbnil} />)
        } */}
        {
            cardDataArray.map(({title,description, thumbnil, price, category}, index) => <IndPropsCard key={index} title={title} category={category} description={description} price={price} thumbnil={thumbnil} />)
        }

    </div>
}