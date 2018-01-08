//Container Component
import React from "react";
import Detail from "./Detail";

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
              {products.map(product => (
                <Detail product={product} key={product.id} />
              ))}
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
