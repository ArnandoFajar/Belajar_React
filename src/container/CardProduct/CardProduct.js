import React, { Component } from 'react'

export class CardProduct extends Component {

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        },
        () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order >0)
        {
            this.setState({
            order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

  render() {
    return (
        <div className="card" style={{width: 18 + 'rem'}}>
        <img src="https://blog.skillacademy.com/hubfs/contoh%20group%20shots.webp" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <hr/>
            <button className='btn btn-secondary' onClick={this.handleMinus}>-</button>
            <input type="text" className='form-control' value={this.state.order} onChange={this.handleMinus}/>
            <button className='btn btn-secondary' onClick={this.handlePlus}>+</button>
        </div>
        </div>
    )
  }
}

export default CardProduct