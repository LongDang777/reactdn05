
// lưu state là kiểu object để khi cần thêm kiểu dữ liệu mới cho state sẽ dễ chỉnh sửa
//state defaut
let qlnd = {
    mangND: [
        { taiKhoan: "user123", hoTen: "Nguyễn Thị Khách Hàng", matKhau: "123456", sdt: "094325526", email: "test@gmail.com", loaiND: "khachHang" },
        { taiKhoan: "user456", hoTen: "Nguyễn Thị Nhân Viên", matKhau: "123456", sdt: "094325526", email: "test@gmail.com", loaiND: "nhanVien" },
    ],
    //luu thông tin cần xem chi tiết
    //Component tableDSND đẩy thông tin
    //FormDangKy lấy thông tin về
    thongTinNguoiDung: {
        taiKhoan: "user123", hoTen: "Nguyễn Thị Khách Hàng", matKhau: "123456", sdt: "094325526", email: "test@gmail.com", loaiND: "khachHang"
    },
    nguoiDung: {
        values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            sdt: "",
            email: "",
            loaiND: "khachHang"
        },
        errors: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            sdt: "",
            email: "",
            loaiND: ""
        }
    }

}

// let qlnd = [
//     {obj}
// ]
export const quanLyNDReducer = (state = qlnd, action) => {
    switch (action.type) {
        case "THEM_NGUOI_DUNG":
            state.mangND = [...state.mangND, action.nguoiDung];

            return { ...state }
        case 'XOA_NGUOI_DUNG':
            let mangNDXoa = [...state.mangND];

            state.mangND = mangNDXoa.filter((nd) => {
                return nd.taiKhoan !== action.taiKhoanXoa;
            });

            return { ...state }
        case 'XEM_THONG_TIN':
            state.thongTinNguoiDung = action.thongTinND
            // state.nguoiDung.values = action.thongTinND;
            // state.nguoiDung = { ...state.nguoiDung }
            return { ...state }
        case 'HANDLE_INPUT':
            //!B1: Thử gán trực tiếp giá trị vào các mảng hoặc object
            //!B2: Nếu không đổi được UI hoặc giá trị (bị lỗi)
            //!=> thử copy mảng hoặc object để đổi vùng nhớ
            state.nguoiDung = action.nguoiDung

            //  state.nguoiDung = {...state.nguoiDung}

            //!return luôn luôn phải copy để tạo vùng nhớ mới
            return { ...state }
        case 'CAP_NHAT':
            let mangCapNhat = [...state.mangND]
            //tìm người dùng cần cập nhật trong mảng
            let nguoiDungCapNhat = mangCapNhat.find((nd) => {
                return nd.taiKhoan === action.thongTinCN.taiKhoan;
            });
            //!  Do kết quả từ find không gán trực tiếp được giá trị mới 
            //!=> kết quả từ find là địa chỉ ô nhớ
            //  nguoiDungCapNhat = action.thongTinCN;

            //dùng findIndex => index => mangCapNhat[index]
            //=>mangCapNhat[index] = action.thongTinCN;

            if (nguoiDungCapNhat) {
                //tìm thấy
                // không cập nhật taiKhoan (không được đổi) => không liệt kê để gán giá trị
                nguoiDungCapNhat.hoTen = action.thongTinCN.hoTen;
                nguoiDungCapNhat.matKhau = action.thongTinCN.matKhau;
                nguoiDungCapNhat.sdt = action.thongTinCN.sdt;
                nguoiDungCapNhat.email = action.thongTinCN.email;
                nguoiDungCapNhat.loaiND = action.thongTinCN.loaiND;

            }
            state.mangND = mangCapNhat;

            return { ...state };
        default: return state;
    }
}
