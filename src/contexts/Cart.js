import React, { Component } from "react";

export const CartContext = React.createContext();
export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartItem: []
    };
    this.addTOCart = this.addTOCart.bind(this);
  }
  addTOCart(product) {
    this.setState({
      CartItem: this.state.CartItem.concat(product)
    });
    localStorage.setItem("CarItem", `${this.state.CartItem}`);
  }
  render() {
    return (
      <CartContext.Provider
        value={{
          CartItem: this.state.CartItem,
          addTOCart: this.addTOCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
