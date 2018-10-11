import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    console.log(this.state);
    let display = this.state.products.map(e => {
      return (
        <div key={e.product_id}>
          <img src={e.img_url} alt="" />
          <p>{e.name}</p>
          <p>{e.price}</p>
          <button>Add To Cart</button>
        </div>
      );
    });
    return (
      <div>
        <h1>Products</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
        {display}
      </div>
    );
  }
}
