import { useState } from "react";

/* export default function Product({productName, price, onClickHandler}) { */
export default function Product({product, onClickHandler}) {

  const [isInCart, setIsInCart] = useState(false);

  return (
    <div style={{
      width: "150px",
      border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      margin: "5px",
      padding: "5px"
    }}>
      <h2>{product.name}</h2>
      <div>{product.price} CZK</div>
      <div><img src={product.image} height = {150} width = {150}/></div>
      <div>{isInCart && "In Cart"}</div>
      <button onClick={() => {
        setIsInCart(true);
        onClickHandler(product)
      }
    }>Buy</button>
    </div>
  )
}

/* export default function Product(props) {
  return (
    <div>
      <h2>{props.productName}</h2>
      <div>{props.price}</div>
      <button onClick={() => {props.onClickHandler(props.productName)}}>Buy</button>
    </div>
  )
} */