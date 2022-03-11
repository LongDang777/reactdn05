import React, { Component } from 'react'


import { connect } from 'react-redux';

class SanPham extends Component {
    render() {
        console.log( this.props);
        //Khi kết nối được với store thì props sẽ được cung cấp phương thức dispatch
        //dispatch giúp đưa dữ liệu lưu lên store
        let {sanPham, dispatch} = this.props;
        return (
            <div className="card">
                <img src={sanPham.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sanPham.tenSP}</h5>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                    <button onClick={() => {
                       //dispatch phải truyền vào 1 action
                       let action = {
                           //type: là thuộc tính bắt buộc
                           type:"THEM_GIO_HANG",
                           sanPhamGH:sanPham,
                           soLuong:1
                       }

                       //đưa dữ liệu lên redux store
                       dispatch(action);

                    }} className='btn btn-danger' data-toggle="modal" data-target="#exampleModal" >Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

// const componentSanPhamRedux = connect()(SanPham);
// export default componentSanPhamRedux;
// export const componentSanPhamRedux = connect()(SanPham);
export default connect()(SanPham);
