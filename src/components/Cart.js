import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Cart extends Component{
    render(){
        return(
            <div>
                <h1>Cart</h1>
                <Link to="/">
                <button>Home</button>
                </Link>
                {/* <Link to="/products">
                <button>Products</button>
                </Link> */}
            </div>
        )
    }
}