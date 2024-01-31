import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  let [count , setCount] = useState(0);
  const Addfun = () =>{
    setCount(count + 1);
    console.log(count);
  }
  const Subfun = () =>{
    setCount(count - 1);
    console.log(count);
  }


  return (
    <div className="App">
      <h1>Value = {count}</h1>
      <button onClick={Addfun}>Add</button>
      <br></br>
      <button onClick={Subfun}>Substract</button>

    </div>
  );
}

export default App;
