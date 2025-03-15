export const RenderList = () => {
    const arr = [1, 2, 3, 4, 5]
    // const arr = [1,2,3]

    // const elementArr = arr.map((num) => {
    //     return <li>{num}</li>
    // })


    // console.log(elementArr)

    return <div>
        <h1>Render List</h1>
        {/* <ul>
            <li>{arr[0]}</li>
            <li>{arr[1]}</li>
            <li>{arr[2]}</li>
            <li>{arr[3]}</li>
            <li>{arr[4]}</li>
            <li>{arr[5]}</li>
        </ul> */}

        <ul>
            {
                arr.map((num) => {
                    return <li>{num}</li>
                })
            }
            {/* <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li> */}

        </ul>
    </div>
}