import Product from '../product.js';
import { useState, useEffect } from 'react';
import ProductForm from '../product-form';


export default function Shop() {

  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();   //  error or err..?


  const onNewProductHandler = (product) => {
    const newData = [...data]
    newData.push(product)
    console.log(newData)
    setData(newData)
  }


  useEffect(() => {
    setTimeout(() => {
    console.log('Its On');
    fetch('http://localhost:3001/products')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`Unable to get data: ${response.statusText}`)
      })
        .then(json => setData(json))
          .catch((err) => setError(err.message))
            .finally(() => setIsPending(false));
    },
    2000)
  }, [])

/* 
const handler = function(product) {
  const newCart = [...cart];
  console.log({product} + ' Clicked');
  newCart.push(product);
  console.log(newCart);
  setCart(newCart)
}
 */

const addToCartHandler = function(product) {

  const newCart = [...cart]
  newCart.push(product)
  console.log(newCart)
  setCart(newCart)
}

const removeFromCartHandler = function(product) {
  const newCart = [...cart]
  const productIndex = cart.findIndex(item => item.id == product.id)
  
  newCart.splice(productIndex, 1)
  
  setCart(newCart)
}







/* 
const coltProduct = {
  name: "Bullet Proof Vest",
  price: 9
}

const calicoProduct = {
  name: "Bullet Proof Vest",
  price: 9
}

const glockProduct = {
  name: "Bullet Proof Vest",
  price: 9
}
 */
/* const data = [
  {
    id: 1,
    name: "Bullet Proof Vest",
    price: 9
  },
  
  {
    id: 2,
    name: "Kevlar Vest",
    price: 8
  },
  
  {
    id: 3,
    name: "Kevlar Underwear",
    price: 7
  }
  
] */

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Shop</h2>
      <div> 
        <div>{cart.length}</div>
        {isPending && "Loading Data..."}
        {error && <div>{error}</div>}
        <div style = {{
        display: "flex",
        flexWrap: "wrap",
        margin: "5px"
      }}>   
        {data.map(item => <Product key={item.id} product={item} onClickHandler={addToCartHandler}/>)}
        </div>    
      {/* <Product product={coltProduct} onClickHandler={handler}/>
      <Product product={calicoProduct} onClickHandler={handler}/>
      <Product product={glockProduct} onClickHandler={handler}/> */}
      <ProductForm onNewProduct = {onNewProductHandler}/>
      </div>

      <div>
    <h1>Shopping Cart</h1>
          {cart.map(item=> <div>{item.name} <button onClick = {removeFromCartHandler}>-</button></div>)}
    </div>
     
    </main>
  );
}