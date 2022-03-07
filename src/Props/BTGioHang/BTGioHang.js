import React, { Component } from 'react';
import Cart from './Cart';
import DanhSachSanPham from './DanhSachSanPham';

class BTGioHang extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/Phones/vsphone.jpg" },
        {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/Phones/meizuphone.jpg"
        },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/Phones/applephone.jpg" }
    ];

    state = {
        gioHang: []
    }

    //state khai báo ở đâu thì hàm setState gọi ở đó
    themGioHang = (spGioHang) => {
        console.log(spGioHang);
        let { gioHang } = this.state;

        // Spread Operator
        let objGioHang = { ...spGioHang, soLuong: 1 };
        // this.state.gioHang.push(spGioHang);
        // let gioHangMoi = [...gioHang, objGioHang];

        //Kiểm tra sp đã có trong giỏ hàng chưa
        //find => trả về đối tượng , findIndex => trả về vị trí của phần tử

        let gioHangMoi = [...gioHang];
        // let spFind = gioHang.find(sp => sp.maSP === spGioHang.maSP);
        let spFind = gioHang.find((sp) => {
            return sp.maSP === spGioHang.maSP;
        })
        if (spFind) {
            //tìm thấy
            spFind.soLuong += 1;
        } else {
            // gioHangMoi.push(objGioHang);
            gioHangMoi = [...gioHangMoi, objGioHang]
        }
        //setState
        this.setState({
            gioHang: gioHangMoi
        })
    }

    xoaSanPham = (maSPXoa) => {
        console.log(maSPXoa);
        let { gioHang } = this.state;
        // let index = gioHang.findIndex((sp) => {
        //     return sp.maSP === maSPXoa;
        // });
        // let gioHangMoi = [...gioHang];
        // if(index !== -1){
        //     //tìm thấy
        //     gioHangMoi.splice(index,1);
        // }
        // filter(): trả về mảng các object thỏa đk
        // gioHangMoi: không chứa sản phẩm cần xóa
        let gioHangMoi = gioHang.filter((sp) => {
            //lấy các sp mà mã khôn trùng với cái cần xóa
            return sp.maSP !== maSPXoa;
        })
        this.setState({
            gioHang: gioHangMoi
        })

    }

    tangGiamSL = (maSP,soLuong)=>{
        console.log(maSP);
        let { gioHang } = this.state;
        let spFind = gioHang.find(sp => sp.maSP === maSP);
        if(spFind){
            //tìm thấy
            //2 + 1 =3
            //2  + -1 = 1
            spFind.soLuong += soLuong;
            if(spFind.soLuong < 1){
                alert("Số lượng không đúng");
                // C1: luu giữ là 1
                // 0 -= -1 => 0 -- 1 => 0 + 1;
                // spFind.soLuong -= soLuong;
                //C2: xóa sp ra khỏi giỏ hàng
                this.xoaSanPham(maSP);
                return;
            }
        }
        this.setState({
            gioHang:gioHang
        })

    }

    tinhTongSP = () => {
        let { gioHang } = this.state;
        let tongSL = gioHang.reduce((sl,sp,index) => { 
            return sl += sp.soLuong;
         },0);
         console.log(tongSL);
         return tongSL;
    }
    render() {
        return (
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h2>Bài tập giỏ hàng</h2>
                    <div>
                        <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#exampleModal">Giỏ hàng ({this.tinhTongSP()})</span>
                    </div>
                </div>
                <DanhSachSanPham themGioHang={this.themGioHang} mangSP={this.arrPhone} />
                <Cart tangGiamSL={this.tangGiamSL}  mangGioHang={this.state.gioHang} xoaSanPham={this.xoaSanPham} />
            </div>
        );
    }
}

export default BTGioHang;