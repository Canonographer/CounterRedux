import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByAmt } from './redux/counterSlice'

function Home() {
    const dispatch =useDispatch()
    const count =useSelector((state)=>state.counterReducer.count)
    const [amnt,setAmnt]=useState()
  return (
    <>
      <div className='container  mt-5 '>
        <div className='bg-white container d-flex flex-column align-self-center border border-primary border-2 shadow w-50 justify-content-center align-items-center'>
            <h3 className='text-center text-dark'>Counter app</h3>
            <h4 className='text-center text-info'>{count}</h4>
            <div className='d-flex justify-content-between mt-4 p-3'>
                 <div className="btn btn-success m-3"onClick={()=>{dispatch(increment())}}>Increment</div>
                <div className="btn btn-dark m-3"onClick={()=>{dispatch(reset())}}>Reset</div>
                <div className="btn btn-danger m-3"onClick={()=>{dispatch(decrement())}}>Decrement</div>
            </div>

            <div className='mt-5 mb-2 text-center'>
                <input type="text" placeholder='Enter amount to be add' onChange={(e)=>setAmnt(e.target.value)}/>
                <button className='btn btn-secondary ms-3' onClick={()=>dispatch(incrementByAmt(Number(amnt)))}>Add</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Home
