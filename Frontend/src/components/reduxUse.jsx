import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, reset} from '../features/counterSlice.js'

export default function ReduxUse(){
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
        <h1>Count : {count} </h1>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button disabled={count <= 0 && true} onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </>
  )
}