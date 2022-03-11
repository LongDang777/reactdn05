import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import GioHang from './GioHang';

class BTGioHangRedux extends Component {


    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/Phones/vsphone.jpg" },
        {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/Phones/meizuphone.jpg"
        },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/Phones/applephone.jpg" }
    ];


    render() {
        return (
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h2>Bài tập giỏ hàng</h2>
                    <div>
                        <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#exampleModal">Giỏ hàng (0)</span>
                    </div>
                </div>
                <DanhSachSanPham mangSP={this.arrPhone}/>
                <GioHang/>
            </div>
        );
    }
}

export default BTGioHangRedux;