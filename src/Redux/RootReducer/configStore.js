import { combineReducers,createStore } from "redux";

// B1: gán giá trị mặc định cho state/reducer
// let gioHang = []
import {gioHangReducer} from './gioHangReducer';

const rootReducer = combineReducers({
    //chứa các state
    //Reducer: chính là state của redux
    
    // gioHangReducer:gioHangReducer
    // object literal
    gioHangReducer

    //  xemChiTietReducer:(state: chiTiet)=>{
    //  }


});

export const store = createStore(rootReducer);