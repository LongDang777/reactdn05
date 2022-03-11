import React, { Component } from 'react'

//Thư viện để kết nối react component với store redux
import { connect } from 'react-redux'

class GioHang extends Component {

  renderGioHang = () => {
    let { gioHang } = this.props;
    console.log(gioHang);
    return gioHang.map((sp) => {
      return <tr key={`cart${sp.maSP}`}>
        <td>{sp.maSP}</td>
        <td>
          <img style={{ width: '50px' }} src={sp.hinhAnh} alt="" />
        </td>
        <td>{sp.tenSP}</td>
        <td>
          <button onClick={() => {
              let action ={
                type:"TANG_GIAM_SL",
                maSPSL:sp.maSP,
                soLuong: -1
              }
              this.props.dispatch(action);

          }} className='btn btn-success'>-</button>
          <span>{sp.soLuong}</span>
          <button onClick={() => {
               let action ={
                type:"TANG_GIAM_SL",
                maSPSL:sp.maSP,
                soLuong: 1
              }
              this.props.dispatch(action);
              
          }} className='btn btn-info'>+</button>
        </td>
        <td>
          {sp.giaBan.toLocaleString()}
        </td>
        <td>
          {(sp.soLuong * sp.giaBan).toLocaleString()}
        </td>
        <td>
          <button onClick={() => {
              let action ={
                type:"XOA_SAN_PHAM",
                maSPXoa: sp.maSP
              }
              this.props.dispatch(action);

          }} className='btn btn-danger'>Xóa</button>
        </td>
      </tr>
    })
  }

  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Hình</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderGioHang()}
                </tbody>
              </table>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//mapStateToProps: chỉ tạo khi cần lấy state từ store đem xuống cho props của component
const mapStateToProps = (rootReducer) => {
  return {
    //tạo prop mới cho component
    gioHang: rootReducer.gioHangReducer
  }
}
//Tạo ra component mới được kết hợp từ store redux và react component
//component mới sẽ chứa state của redux , UI react component
const componentGioHangRedux = connect(mapStateToProps)(GioHang);

export default componentGioHangRedux;