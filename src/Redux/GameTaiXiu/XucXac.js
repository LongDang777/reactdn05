import React, { Component } from 'react'

//kết nối đến store redux
import { connect } from 'react-redux'

class XucXac extends Component {
  render() {
    console.log(this.props);
    let {mangXucXac} = this.props.gameTaiXiu;
    return (
      <div className='row'>
        <div className="col-4">
          <button className='btn btn-info' onClick={() => { 
              let action ={
                type:"DAT_CUOC",
                chon:true
              }
              this.props.dispatch(action);
           }} >Tài</button>
        </div>
        <div className="col-4">
          <img src={mangXucXac[0].hinh} alt="" />
          <img src={mangXucXac[1].hinh} alt="" />
          <img src={mangXucXac[2].hinh} alt="" />
        </div>
        <div className="col-4">
          <button className='btn btn-info' onClick={() => { 
              let action ={
                type:"DAT_CUOC",
                chon:false
              }
              this.props.dispatch(action);
           }} >Xỉu</button>
        </div>
      </div>
    )
  }
}
// đem state của redux về props của component
const mapStateToProps = (rootReducer) =>{
  return {
    // mangXucXac: rootReducer.gameTaiXiuReducer.mangXucXac
    gameTaiXiu: rootReducer.gameTaiXiuReducer
  }
}
export default connect(mapStateToProps)(XucXac);
