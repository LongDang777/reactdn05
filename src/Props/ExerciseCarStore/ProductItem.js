import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {sanPham,xem} = this.props;
    return (
      <div className="card">
        <img src={sanPham.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{sanPham.name}</h5>
          <p>{sanPham.price}</p>
          <button data-toggle="modal" data-target="#exampleModal" className='btn btn-info'onClick={() => { 
              xem(sanPham);
              
           }} >Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
