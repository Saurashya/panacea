import React from 'react'
import { useState } from 'react'

function Demo1() {
    const [content, setContent] = useState('')
    const handleChange = (e) => {
        setContent(e.target.value)
    }
    return (
        <>
           <div className="flex items-center justify-center h-[50vh] flex-col gap-10">
            <h1 className='text-4xl text-semibold text-secondary text-center'>Live Demo 1</h1>
            <input type="text" onChange={handleChange} className='outline outline-black rounded-lg p-4 w-[250px] text-2xl'/>
            <h1 className='text-2xl'>You Typed : {content}</h1>
           </div>
        </>
    )
}

export default Demo1
