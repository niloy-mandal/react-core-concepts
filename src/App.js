import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(87);
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid yellow', borderRadius: '15px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

export default App;

// const products = [
//   { name: 'mobile', price: 15000 },
//   { name: 'camera', price: 55000 },
//   { name: 'laptop', price: 155000 },
//   { name: 'watch', price: 5000 },
//   { name: 'shoe', price: 1500 },
// ]
