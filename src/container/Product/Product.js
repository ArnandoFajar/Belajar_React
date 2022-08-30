import React, { Component, Fragment } from 'react'
import CardProduct from '../CardProduct/CardProduct'

export class Product extends Component {

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

  render() {
    return (
        <Fragment>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Main</a></li>
                    <li className="breadcrumb-item"><a href="#">Sub</a></li>
                    <li className="breadcrumb-item">Keranjang Product</li>
                    <li className="breadcrumb-item active">{this.state.order}</li>
                </ol>
            </nav>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value) }/>
      </Fragment>
    )
  }
}

export default Product