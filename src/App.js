
import { Outlet, Link } from "react-router-dom";



function App() {
  return (
   
    <div className="App">
      <div>
      <h1>React E-Shop!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/shop">Shop</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/contact">Contact</Link>
        <Link to="/addproduct">Add Product</Link>
      </nav>
      <Outlet />
    </div>
    
    </div>
  );
}

export default App;
