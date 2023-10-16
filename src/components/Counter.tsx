import React from 'react'

import { useSelector ,useDispatch} from 'react-redux'
import { stateType } from '../store'
import { useEffect ,useCallback} from 'react'

function Counter() {
  const dispatch=useDispatch();
  const counter=useSelector((state:stateType)=>state.counter)
  const toggle=useSelector((state:stateType)=>state.toggle)

  

  

  const increase=useCallback(()=>{
    const action={
      type:"increase",
      payload:{
        number:5
      }
    }
    dispatch(action)
  },[dispatch])
  useEffect(()=>{
    increase()
   },[increase])
  const decrease=()=>{
    const action={
      type:"decrease",
      payload:{
        number:1
      }
    }
    dispatch(action)

  }
  const flip=()=>{
    const action={
      type:"flip",
    }
    dispatch(action)

  }
  return (
    <>
      <h1>Hello Redux Basic</h1>
      {toggle&&<h2>Counter: {counter}</h2>}
      <div className="buttonHolder">
        <button onClick={increase}>Increase +</button>
        <button onClick={decrease}>Decrease -</button>
      </div>
      <div>
        <button onClick={flip}>Hide/ShowCounterNumber</button>
      </div>
    </>
  )
}

export default Counter