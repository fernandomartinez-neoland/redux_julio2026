
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./redux/store.redux";
import {aumentar, decrementar, resetear} from './redux/contador.redux'
import Otro from "./otro";
function App() {
const contador:number= useSelector((state: RootState)=>{
  return state.count.value
})
  const dispatch=useDispatch()
  return <>
  <h1>APP</h1>
  <h1>{contador}</h1>
  <button onClick={()=>{dispatch(aumentar())}}>Aumentar</button>
  <button onClick={()=>{dispatch(decrementar())}}>Decrementar</button>
  <button onClick={()=>{dispatch(resetear())}}>Reiniciar</button>
<Otro></Otro>
  </>;
  
}

export default App;
