import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [num, setnum] = useState(0)
    // const [multipledValue, setMultipledValue] = useState(0)

    // console.time()
    // useEffect(() => {
    //     if(num){
    //         setMultipledValue(num + 10)
    //     }
    // }, [num])


    const clickHandle = () => {

        const newNum = num  + 1
        setnum(newNum)
        // setMultipledValue(newNum + 10)
    }

    console.log('component rendered')
    
    // console.timeEnd()

    const multipledValue = useMemo(() => {
        const sum = num + 10
        return sum
    }, [num])
    

    return (
        <div>
            Use Memo Hook Component

            <div>
                <h2>Added Number value: {num}</h2>
                <h2>Multiplied Value: {multipledValue} </h2>
            </div>


            <button onClick={clickHandle}>
                Click to add
            </button>
        </div>
    )
}

export default UseMemoHook
