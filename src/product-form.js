
import { useState } from "react"

function ProductForm(props) {

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const [feedback, setFeedback] = useState();

  const onSubmitHandler = event => {
    event.preventDefault()

    const newProduct = {
      name: productName,
      price: price,
      image
    }

    fetch("http://localhost:3001/products", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      /* mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit */
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      /* redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url */
      body: JSON.stringify(/* data */newProduct) // body data type must match "Content-Type" header
    })/* .then(r=> setFeedback(r))
        .finally(() => {
          setProductName('');
          setPrice(0);
        }); */.then(r=> r.json())
                .then(json => setFeedback(json))
                  .finally(() => {
                    props.onNewProduct(newProduct);
                    setProductName('');
                    setPrice(0);
                    setImage('')
                  });

  }

  return (
    <>
    <form onSubmit = {onSubmitHandler}>
      <input type={"text"} value = {productName} placeholder = {"Product Name"} onChange = {(e) => setProductName(e.target.value)}/>
      <input type={"text"} value = {image} placeholder = {"Image"} onChange = {(e) => setImage(e.target.value)}/>
      <input type={"number"} value = {price} placeholder = {"Price"} onChange = {(e) => setPrice(e.target.value)}/>
      <input type={"submit"}/>
      {productName}
    </form>
    
    {feedback && <div>{JSON.stringify({feedback})}</div>}
    </>
  )
}

export default ProductForm

