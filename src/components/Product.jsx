import React from "react";
import Detail from "./Detail";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  getProduct(productId) {
    fetch("/products.json")
      .then(res => res.json())
      .then(products => {
        const product = products.filter(p => p.id.toString() === productId)[0];
        this.setState({
          product
        });
      })
      .catch(error => {
        this.setState({});
      });
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    this.getProduct(productId);
  }

  render() {
    const product = this.state.product;
    if (!product) {
      return null;
    }

    return <Detail product={product} />;
  }
}

export default Product;
