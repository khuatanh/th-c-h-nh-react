import React, { Component } from "react";
import "./Product.css";

import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Col,
  Row
} from "reactstrap";

import { CartContext } from "../contexts/Cart";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://jdded.sse.codesandbox.io/products").then(res => {
      this.setState({ products: res.data });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="50%"
                  height="50%"
                  mb="20"
                  src={product.imageUrl}
                />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({ addTOCart }) => (
                      <Button onClick={() => addTOCart(product)}>
                        Add to card
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Product;
