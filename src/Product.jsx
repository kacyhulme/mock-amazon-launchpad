import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    const product = window.Products.filter(p => p.id === productId)[0];
    this.setState({
      product: product
    });
  }

  render() {
    console.log(this.props);
    const product = this.state.product;
    if (!product) {
      return null;
    }

    return <div>{product.product_name}</div>;
  }
}

export default Product;
