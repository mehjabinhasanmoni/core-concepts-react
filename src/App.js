import './App.css';

function App() {

  const products = [
    {name : 'Laptop', price: 50000},
    {name : 'Mobile', price: 20000},
    {name : 'Mouse', price: 1500},
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price} warrenty='2 Years'></Product>)
      }

      {/* <Product name="Laptop" price="50000"></Product>
      <Product name="Mobile" price="20000"></Product>
      <Product name="Mouse" price="1500"></Product>
       */}

       {/* ------------------------- */}


    </div>
  );
}



function Product(props) {
  console.log(props);
  return(
    <div className='product'>
      <h2>Name : {props.name} </h2>
      <p>Price : {props.price}</p>
      <p>Warrenty : {props.warrenty}</p>
    </div>
  );
}

export default App;
