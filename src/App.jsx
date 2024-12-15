import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./features/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incAmount, setIncAmount] = useState(2)

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());
  };

  return (
     <div className="App">
        
     
        <button className="btn btn-primary" onClick={inc}> Inc Btn </button>
      
          counter value is :{count} 
    
        <button className="btn btn-secondary" onClick={dec}> dec Btn </button>
         <div>

         </div>
        <input type="number" value={incAmount} onChange={(e)=>setIncAmount(e.target.value)} placeholder="enter the number" />

        <button onClick={()=>dispatch(incrementByAmount(Number(incAmount)))}>
           Add Amout 
        </button>
        <hr/>
        <button onClick={()=>dispatch(incrementByAmount(Number(incAmount)))}>
           Add async
        </button>
    </div>
  );
}

export default App;
