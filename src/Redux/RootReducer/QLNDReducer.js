
// lưu state là kiểu object để khi cần thêm kiểu dữ liệu mới cho state sẽ dễ chỉnh sửa
//state defaut
let qlnd = {
    mangND:[
        {taiKhoan:"user123", hoTen:"Nguyễn Thị Khách Hàng",matKhau:"123456",sdt:"094325526", email:"test@gmail.com", loaiND:"khachHang" },
        {taiKhoan:"user456", hoTen:"Nguyễn Thị Nhân Viên",matKhau:"123456",sdt:"094325526", email:"test@gmail.com", loaiND:"nhanVien" },
    ]
}

// let qlnd = [
//     {obj}
// ]
export const quanLyNDReducer = (state = qlnd, action ) => { 
    switch (action.type) {
        case "THEM_NGUOI_DUNG":
            state.mangND = [...state.mangND,action.nguoiDung];

            return {...state}
        default: return state;
    }
 }
