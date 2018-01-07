//Container Component
import React from "react";
import ProductDetails from "./ProductDetails";
import { BrowserRouter as Route, Link } from "react-router-dom";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      category: props.category,
      items: [
        {
          id: 1,
          product_name: "Operative actuating budgetary management",
          num_stars: 3,
          price: 304.48,
          prime: true,
          image: "http://dummyimage.com/216x147.bmp/5fa2dd/ffffff"
        },
        {
          id: 2,
          product_name: "Open-architected systematic local area network",
          num_stars: 5,
          price: 192.72,
          prime: true,
          image: "http://dummyimage.com/215x108.bmp/dddddd/000000"
        },
        {
          id: 3,
          product_name: "Compatible real-time frame",
          num_stars: 1,
          price: 794.69,
          prime: false,
          image: "http://dummyimage.com/120x222.bmp/dddddd/000000"
        },
        {
          id: 4,
          product_name: "Sharable clear-thinking groupware",
          num_stars: 2,
          price: 650.55,
          prime: false,
          image: "http://dummyimage.com/106x221.jpg/dddddd/000000"
        },
        {
          id: 5,
          product_name: "Seamless client-driven standardization",
          num_stars: 1,
          price: 424.41,
          prime: true,
          image: "http://dummyimage.com/113x163.bmp/5fa2dd/ffffff"
        },
        {
          id: 6,
          product_name: "Enhanced multimedia moderator",
          num_stars: 3,
          price: 119.73,
          prime: true,
          image: "http://dummyimage.com/177x149.jpg/dddddd/000000"
        },
        {
          id: 7,
          product_name: "Object-based systematic website",
          num_stars: 2,
          price: 856.34,
          prime: true,
          image: "http://dummyimage.com/212x218.jpg/cc0000/ffffff"
        },
        {
          id: 8,
          product_name: "Operative scalable success",
          num_stars: 5,
          price: 382.54,
          prime: true,
          image: "http://dummyimage.com/100x131.png/dddddd/000000"
        },
        {
          id: 9,
          product_name: "Total coherent portal",
          num_stars: 1,
          price: 74.06,
          prime: true,
          image: "http://dummyimage.com/125x149.jpg/cc0000/ffffff"
        },
        {
          id: 10,
          product_name: "Reverse-engineered needs-based framework",
          num_stars: 2,
          price: 617.59,
          prime: true,
          image: "http://dummyimage.com/175x217.jpg/5fa2dd/ffffff"
        },
        {
          id: 11,
          product_name: "Right-sized fresh-thinking neural-net",
          num_stars: 1,
          price: 4.05,
          prime: true,
          image: "http://dummyimage.com/213x217.bmp/dddddd/000000"
        },
        {
          id: 12,
          product_name: "Public-key bifurcated open architecture",
          num_stars: 5,
          price: 613.98,
          prime: false,
          image: "http://dummyimage.com/175x175.png/ff4444/ffffff"
        },
        {
          id: 13,
          product_name: "Business-focused zero administration model",
          num_stars: 2,
          price: 381.75,
          prime: false,
          image: "http://dummyimage.com/191x105.bmp/cc0000/ffffff"
        },
        {
          id: 14,
          product_name: "Phased methodical utilisation",
          num_stars: 4,
          price: 646.46,
          prime: false,
          image: "http://dummyimage.com/112x170.bmp/ff4444/ffffff"
        },
        {
          id: 15,
          product_name: "Front-line multi-tasking budgetary management",
          num_stars: 3,
          price: 531.45,
          prime: true,
          image: "http://dummyimage.com/214x197.png/dddddd/000000"
        },
        {
          id: 16,
          product_name: "Ergonomic responsive workforce",
          num_stars: 5,
          price: 646.91,
          prime: true,
          image: "http://dummyimage.com/235x103.png/dddddd/000000"
        },
        {
          id: 17,
          product_name: "Optimized multimedia toolset",
          num_stars: 3,
          price: 333.03,
          prime: false,
          image: "http://dummyimage.com/193x236.jpg/cc0000/ffffff"
        },
        {
          id: 18,
          product_name: "Quality-focused national methodology",
          num_stars: 5,
          price: 828.59,
          prime: false,
          image: "http://dummyimage.com/152x129.jpg/5fa2dd/ffffff"
        },
        {
          id: 19,
          product_name: "Face to face fresh-thinking archive",
          num_stars: 3,
          price: 409.71,
          prime: true,
          image: "http://dummyimage.com/211x130.png/cc0000/ffffff"
        },
        {
          id: 20,
          product_name: "Switchable systemic database",
          num_stars: 1,
          price: 648.34,
          prime: true,
          image: "http://dummyimage.com/190x111.png/5fa2dd/ffffff"
        }
      ]
    };
  }

  // componentDidMount() {
  //   fetch("https://my.api.mockaroo.com/products.json?key=76823bc0")
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  showDetails() {
    console.log("words");
    <div>
      <Route
        exact
        path="/productdetails/:id"
        render={props => <ProductDetails products={this.state.items} />}
      />
    </div>;
  }

  render() {
    const { category, error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div class="container">
            <header class="jumbotron my-4">
              <h1 class="display-3">Mock Amazon Launchpad</h1>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ipsam, eligendi, in quo sunt possimus non incidunt odit vero
                aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
                numquam repellat.
              </p>
              <a href="#" class="btn btn-primary btn-lg">
                Buy Now!
              </a>
            </header>

            <div>
            {items.map(item => (


              <div class="col-lg-3 col-md-4 col-sm-2" style={{height: "400px"}}>
                <div class="card" style={{textAlign:"center", border:"1px solid #eee", margin:"5px",padding:"5px"}}>
                  <img
                    class="card-img-top"
                    src={item.image}
                    alt="Fake Image" height="130" width="130"
                  />
                  <div class="card-body">
                    <h4 style={{height: "40px"}}><Link to={`/productdetails/${item.id}`}>{item.product_name} </Link></h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo magni sapiente, tempore debitis beatae culpa
                      natus architecto.
                    </p>
                    <p>${item.price}</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">
                      Buy Now!
                    </a>
                  </div>
                  <br/>
                </div>
              </div>
              
            ))}
          </div>
 
          <footer class="py-5 bg-dark">
            <div class="container">
              <p class="m-0 text-center text-white">
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

export default ProductsContainer;