let gioHang = [];

//defaut param
export const gioHangReducer = (state =gioHang, action ) => { 

    switch(action.type){
        case "THEM_GIO_HANG":{
            let soLuong = action.soLuong;
            let spGH = {...action.sanPhamGH,soLuong};
            console.log(spGH);
            let gioHangCapNhat = state;
           
            let spFind = gioHangCapNhat.find(sp => sp.maSP === spGH.maSP );
            if(spFind){
                //sp có tồn tại trong giỏ hàng => thì tăng số lượng
                spFind.soLuong += 1;
            }else{
                gioHangCapNhat.push(spGH);
            }
            //trả về state mới cho redux
            //=> redux mới render lại UI
            //immutable: tính bất biến (trùng vùng nhớ)
            // return gioHangCapNhat;

            //trả về mảng mới (speard operator: copy mảng tạo mảng mới)
            return [...gioHangCapNhat];
        }
        case "XOA_SAN_PHAM":{
            let gioHangCapNhat = state.filter((sp) => { 
                return sp.maSP !== action.maSPXoa
             });

             return [...gioHangCapNhat];
        }
        case "TANG_GIAM_SL":{
            let gioHangCapNhat = state;
            let spFind = gioHangCapNhat.find(sp => sp.maSP === action.maSPSL );
            if(spFind){
                spFind.soLuong += action.soLuong;
                if(spFind.soLuong < 1){
                    alert("So luong khong dung");
                    //0 - -1 => 
                    spFind.soLuong -= action.soLuong;
                }
            }

            return [...gioHangCapNhat];

        }
        default: return state;
    }
 }