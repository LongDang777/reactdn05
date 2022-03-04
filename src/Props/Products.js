import React, { Component } from 'react'

export default class Products extends Component {

    render() {
        console.log(this.props.productItem);
        let {productItem} = this.props;
        // this.props.productItem.img
        return (
            <div className="card">
                <img src={productItem.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productItem.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}
