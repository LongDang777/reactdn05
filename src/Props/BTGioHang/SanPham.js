import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sanPham, themGioHang} = this.props;

        return (
            <div className="card">
                <img src={sanPham.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sanPham.tenSP}</h5>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                    <button onClick={() => { 
                        themGioHang(sanPham);
                     }} className='btn btn-danger' data-toggle="modal" data-target="#exampleModal" >Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
