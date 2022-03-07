import React, { Component } from 'react'

export default class Cart extends Component {
    renderGioHang = () => {
        let { mangGioHang, xoaSanPham, tangGiamSL } = this.props;
        return mangGioHang.map((sp) => {
            return <tr key={`cart${sp.maSP}`}>
                <td>{sp.maSP}</td>
                <td>
                    <img style={{ width: '50px' }} src={sp.hinhAnh} alt="" />
                </td>
                <td>{sp.tenSP}</td>
                <td>
                    <button onClick={() => {
                        tangGiamSL(sp.maSP, -1)
                    }} className='btn btn-success'>-</button>
                    <span>{sp.soLuong}</span>
                    <button onClick={() => {
                        tangGiamSL(sp.maSP, 1)
                    }} className='btn btn-info'>+</button>
                </td>
                <td>
                    {sp.giaBan.toLocaleString()}
                </td>
                <td>
                    {/* Những giá trị có thể tính toán từ dữ liệu có sẵn thì không cần lưu vào biến */}
                    {(sp.soLuong * sp.giaBan).toLocaleString()}
                </td>
                <td>
                    <button onClick={() => {
                        xoaSanPham(sp.maSP);
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
