export const RenderSingleCard = () => {
    const cardData = {
        title: 'Classic Black Hooded Sweatshirt',
        category: 'Clothes',
        description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability.",
        price: 79,
        thumbnil: 'https://imgur.com/cSytoSD'
    }
    const {
        title,
        category,
        description,
        price,
        thumbnil,
    } = cardData

    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mx-6 ">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
            <img className="w-full h-60 object-cover rounded-xl" src={`${thumbnil}.jpeg`}  alt="Classic Black Hooded Sweatshirt" />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">{title}</h2>
            <p className="text-gray-500 text-sm">{category}</p>
            <p className="text-gray-700 mt-2 text-sm">{description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">${price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Add to Cart</button>
            </div>
        </div>

    </div>
}