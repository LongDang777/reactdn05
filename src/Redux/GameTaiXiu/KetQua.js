import React, { Component } from 'react'

import { connect } from 'react-redux'

class KetQua extends Component {
  showResult = () => {
    let { mangXucXac } = this.props.gameTaiXiu;
    let tongDiem = mangXucXac.reduce((tong, xucxac, index) => {
      return tong += xucxac.diem;
    }, 0);

    let kq = tongDiem >= 11 ? "Tài": "Xỉu";
    return `${kq} - ${tongDiem}`

  }
  render() {
    console.log(this.props);
    let { banChon, soBanThang, tongSoBan } = this.props.gameTaiXiu;
    return (
      <div>
        <p>
          {this.showResult()};
        </p>
        <p>Bạn chọn: <span className='text-warning'>
          {banChon === true ? "Tài" : "Xỉu"}
        </span></p>
        <p>Số bàn thắng: <span className='text-success'>{soBanThang}</span></p>
        <p>Tổng số bàn chơi: <span className='text-primary'>{tongSoBan}</span></p>
        <button className='btn btn-success' onClick={() => {
          let action = {
            type: 'PLAY_GAME'
          }
          this.props.dispatch(action);
        }} >PLAY GAME</button>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    gameTaiXiu: rootReducer.gameTaiXiuReducer
  }
}
export default connect(mapStateToProps)(KetQua)

//khai báo
// function main(param){
//   // closure function
//     function test(param2){
//     }
// }

//gọi
//() 1: gọi ham main
//() 2: gọi tới hàm test
// main(param)(param2)