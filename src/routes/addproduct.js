
import ProductForm from '../product.js'


export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Add Product</h2>
      <ProductForm onNewProduct = {onNewProductHandler}/>
    </main>
  );
}



