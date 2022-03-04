import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class BTXemChiTiet extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/Phones/vsphone.jpg" },
        {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/Phones/meizuphone.jpg"
        },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/Phones/applephone.jpg" }
    ];

    state = {
        spChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/Phones/vsphone.jpg" }
    }

    renderProduct = () => {
        //các col-4
        return this.arrPhone.map((sp) => {
            return <div className="col-4" key={`phone${sp.maSP}`}>
                <ProductItem sanPham={sp} xemChiTiet={this.showInfo} />
            </div>
        });
    }
    // .onclick = tenHam;
    showInfo = (sp) => {
        console.log(sp);
        this.setState({spChiTiet: sp});
    }

    render() {

        let {spChiTiet} = this.state;
        return (
            <div className='container'>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{spChiTiet.tenSP}</h3>
                        <img className='img-fluid' src={spChiTiet.hinhAnh} alt="" />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{spChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>HDH</td>
                                    <td>{spChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{spChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{spChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{spChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{spChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
