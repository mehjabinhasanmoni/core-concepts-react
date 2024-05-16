import { useState } from 'react';
import './App.css';

function App() {

 
  return (
    <div className="App">
      <Counter></Counter>

    </div>
  );
}


function Counter(){
  const [count, setCount] = useState(1);
  const increaseCount = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseCount = () =>{
    const newCount = count - 1;
    setCount(newCount);
  }


  // console.log(abc)
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}







// ------------------------------------------------------

 // const products = [
  //   {name : 'Laptop', price: 50000},
  //   {name : 'Mobile', price: 20000},
  //   {name : 'Mouse', price: 1500},
  // ]



  //  {/* {
  //       products.map(product => <Product name={product.name} price={product.price} warrenty='2 Years'></Product>)
  //     } */}

  //     {/* <Product name="Laptop" price="50000"></Product>
  //     <Product name="Mobile" price="20000"></Product>
  //     <Product name="Mouse" price="1500"></Product>
  //      */}

  //      {/* ------------------------- */}


  // function Product(props) {
  //   console.log(props);
  //   return(
  //     <div className='product'>
  //       <h2>Name : {props.name} </h2>
  //       <p>Price : {props.price}</p>
  //       <p>Warrenty : {props.warrenty}</p>
  //     </div>
  //   );
  // }


export default App;
