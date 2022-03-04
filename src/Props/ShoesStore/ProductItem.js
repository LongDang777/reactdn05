import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        console.log(this.props.sanPham);
        console.log(this.props.sanPham.image);
        let {sanPham} = this.props;
        // let {name} = sanPham;
        return (
            <div className="card">
                <img src={sanPham.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sanPham.name}</h5>
                    <p className="card-text">{sanPham.price}$</p>
                    <a href="#" className="btn btn-primary">Buy</a>
                </div>
            </div>
        )
    }
}
