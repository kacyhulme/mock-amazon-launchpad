//Container Component
import React from "react";
import { Link } from "react-router-dom";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      products: []
    };
  }

  // update on route change
  componentWillReceiveProps(nextProps) {
    const category = nextProps.match.params.category;
    this.getProducts(category);
  }

  // first page load (landing page)
  componentDidMount() {
    const category = this.props.match.params.category;
    this.getProducts(category);
  }

  getProducts(category) {
    fetch("/products.json")
      .then(res => res.json())
      .then(products => {
        products = products.filter(p => p.category === category);
        this.setState({
          isLoaded: false,
          products
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: false,
          error
        });
      });
  }

  renderProduct(product) {
    return (
      <div className="col-lg-3 col-md-4 col-sm-4" key={product.id}>
        <div
          className="card"
          style={{
            textAlign: "center",
            border: "1px solid #eee",
            margin: "5px",
            padding: "5px",
            minHeight: "410px"
          }}
        >
          <img
            className="card-img-top"
            src={product.image}
            alt="Hello"
            height="130"
            width="130"
          />
          <div className="card-body">
            <h4 style={{ minHeight: "20px" }}>
              <Link to={`/products/${product.id}`}>
                {product.product_name}{" "}
              </Link>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo magni sapiente, tempore debitis beatae culpa natus
              architecto.
            </p>
            <p>${product.price}</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Buy Now!
            </a>
          </div>
          <br />
        </div>
      </div>
    );
  }

  render() {
    const category = this.props.match.params.category;
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <div className="container">
            <header className="jumbotron my-4">
              <h1 className="display-3">Mock Amazon Launchpad</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ipsam, eligendi, in quo sunt possimus non incidunt odit vero
                aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
                numquam repellat.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Buy Now!
              </a>
            </header>

            <div>
              <h3 style={{ textAlign: "left" }}>{category}</h3>
              {products.map(product => this.renderProduct(product))}
            </div>
            <footer className="py-5 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">
                  Copyright &copy; Mock Amazon Launchpad 2017
                </p>
              </div>
            </footer>
          </div>
        </div>
      );
    }
  }
}

export default Category;
