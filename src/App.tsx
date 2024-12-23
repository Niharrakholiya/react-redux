import { useAppSelector,useAppDispatch } from "./redux/hooks"
import { increment,decrement } from "./redux/slice/counter"
function App() {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
    <p>Hello</p>
    <h1>count is {count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
