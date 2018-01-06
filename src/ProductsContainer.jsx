//Container Component
import React from 'react'

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://www.reddit.com/search.json?q=ferrari")
      .then(res => res.json())
      .then(
        result => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.data.children
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
        <ul>
          {items.map(item => (
            <li key={item.data.id}>
              {item.data.created} {item.data.permalink}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default ProductsContainer;
