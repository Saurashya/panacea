import React from 'react'
import { useState } from 'react'

function Demo2() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
        if(count === 0) {
            alert('Count cannot be less than 0')
            setCount(0)
        }
    }

    return (
        <div className="my-10">
            <h1 className='text-4xl text-semibold text-secondary text-center'>Live Demo 2</h1>
            <div className="flex flex-col justify-center items-center h-[40vh] gap-10">
                <h1 className='text-2xl'>The count is : {count}</h1>
                <div className="flex gap-10">
                <button onClick={handleIncrement} className='bg-primary text-3xl p-3 rounded-lg font-bold'> + </button>
                <button onClick={handleDecrement}className='bg-primary text-3xl p-3 rounded-lg font-bold'> - </button>
                </div>
            </div>
        </div>
    )
}

export default Demo2
