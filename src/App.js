import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu";
import Products from "./Page/Products";

import { CartProvider } from "./contexts/Cart";
const Index = () => <h2>Home</h2>;
const Contact = () => <h2>Contact</h2>;
const Cart = () => <h2> Cart</h2>;

export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <TopMenu />
          <Route path="/" exact component={Index} />
          <Route path="/products/" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/carts" exact component={Cart} />
        </Router>
      </div>
    </CartProvider>
  );
}
