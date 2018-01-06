//Container Component
import React from "react";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      productType: props.type,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://my.api.mockaroo.com/products.json?key=76823bc0")
      .then(res => res.json())
      .then(
        result => {
          console.log("here",result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>{this.state.productType}</h3>
          <div className="row">
              {items.map(item => (
                <div className="col-sm-4" key={item.id}>
                  <img
                    src={item.image}
                    alt="Fake Image"
                    height="150"
                    width="150"
                  />
                  <p>{item.product_name}</p>
                  <p>${item.price}</p>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}

export default ProductsContainer;