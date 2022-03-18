import { combineReducers,createStore } from "redux";

// B1: gán giá trị mặc định cho state/reducer
// let gioHang = []
import {gioHangReducer} from './gioHangReducer';
import {gameTaiXiuReducer} from './gameTaiXiuReducer';
import {quanLyNDReducer} from './QLNDReducer'

const rootReducer = combineReducers({
    //chứa các state
    //Reducer: chính là state của redux
    
    // gioHangReducer:gioHangReducer
    // object literal
    gioHangReducer,
    // gameTaiXiuReducer: gameTaiXiuReducer
    gameTaiXiuReducer,
    quanLyNDReducer



});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);