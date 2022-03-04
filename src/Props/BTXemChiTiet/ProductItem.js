import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {sanPham,xemChiTiet} = this.props;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{sanPham.tenSP}</h5>
          <button className='btn btn-info' onClick={() => {
            xemChiTiet(sanPham);
          }} >Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
