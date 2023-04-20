import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

let oldState ={
  value:0
};

let reducerFunction = (oldState,action)=>{
  console.log('oldState---->',oldState);
  console.log('action--->',action.type)
  switch(action.type){
    case 'ADDITION':
      return {...oldState, value:oldState.value+action.payload}
      break;
    case 'SUBTRACTION':
      return {...oldState, value:oldState.value-action.payload}
      break;
      
    default:
      return oldState; 
  }

}
function App() {
  const [newState,dispatch] = useReducer(reducerFunction,oldState)
  return (
    <div className="App">
      
      <h1>{newState.value}</h1>
      <button onClick={()=>{ dispatch({type:"ADDITION",payload:1}) }}>+</button>
      <button onClick={()=>{ dispatch({type:"SUBTRACTION",payload:1}) }}>-</button>
    </div>
  );
}

export default App;
