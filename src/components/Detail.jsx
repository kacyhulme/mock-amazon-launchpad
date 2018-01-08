import React from "react";
import { Link } from "react-router-dom";

class Detail extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div className="col-lg-3 col-md-4 col-sm-4">
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
}

export default Detail;
