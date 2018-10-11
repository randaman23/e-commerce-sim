import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
            <div>
                <h1>Home</h1>
                <Link to="/products">
                <button>Products</button>
                </Link>
                <Link to="/cart">
                <button>Cart</button>
                </Link>
            </div>
        )
    }
}