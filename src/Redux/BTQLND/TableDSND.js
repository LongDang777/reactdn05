import React, { Component } from 'react'

import { connect } from 'react-redux'

class TableDSND extends Component {

  renderTable = () => {
    let { mangND } = this.props;
    let count = 1;
    return mangND.map((nd, index) => {
      return <tr key={nd.taiKhoan}>
        <td>{count++}</td>
        <td>{nd.taiKhoan}</td>
        <td>{nd.hoTen}</td>
        <td>{nd.matKhau}</td>
        <td>{nd.sdt}</td>
        <td>{nd.email}</td>
        <td>{nd.loaiND}</td>
        <td>
          <button className='btn btn-danger'> Xóa</button>
          <button className='btn btn-info'>Xem</button>
        </td>
      </tr>
    })
  }
  render() {
    // console.log(this.props)
    return (
      <div className='card mt-5'>
        <div className="card-header bg-dark text-white">
          Danh sách người dùng
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tài khoản</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Mật khẩu</th>
                <th scope="col">Email</th>
                <th scope="col">SĐT</th>
                <th scope="col">Loại người dùng</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    mangND: rootReducer.quanLyNDReducer.mangND
  }
}
export default connect(mapStateToProps)(TableDSND);
