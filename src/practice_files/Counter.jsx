import './counter.css'
import React from 'react'

function Count(){

    const [count,setCount] = React.useState(0);

    function add(){
        setCount(count + 1)
    }

    function sub(){
        setCount(count - 1)
    }


    return(
        <>
        <h1 className='count'>Counter</h1>
        <div className='counter'>
            <button onClick={sub} className='but'>-</button>
            <button className='but'>{count}</button>
            <button onClick={add} className='but'>+</button>
        </div>
        </>
    )
}

export default Count;