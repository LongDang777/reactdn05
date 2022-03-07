import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {

    renderProducts = () => {
        let { mangSP,themGioHang } = this.props
        return mangSP.map((sp) => {
            return <div className="col-4" key={`proCart${sp.maSP}`}>
                <SanPham themGioHang={themGioHang} sanPham={sp} />
            </div>
        });
    }


    render() {
        console.log(this.props.mangSP);

        return (
            <div className="row">
                {this.renderProducts()}
            </div>
        )
    }
}
