export const Card = (props) => {


    const {
        title,
        category,
        description,
        price,
        images,
    } = props.data

    return <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
        <img className="w-full h-60 object-cover rounded-xl" src={`${images[0]}.jpeg`} alt="Classic Black Hooded Sweatshirt" />
        <h2 className="text-xl font-semibold text-gray-900 mt-4">{title}</h2>
        <p className="text-gray-500 text-sm">{category.name}</p>
        <p className="text-gray-700 mt-2 text-sm line-clamp-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Add to Cart</button>
        </div>
    </div>
}


