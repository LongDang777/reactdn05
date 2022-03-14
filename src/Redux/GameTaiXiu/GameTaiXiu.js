import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import xucxac1 from '../../asset/img/GameTaiXiu/1.png'
import '../GameTaiXiu/GameTaiXiu.css'

export default class GameTaiXiu extends Component {
  render() {
    return (
      <div className='container-fluid text-center gameTaiXiu'>
           {/* <img src={xucxac1} alt="" /> */}
          <h1>GAME ĐỔ XÚC XẮC</h1>
         
          <XucXac/> 
          <KetQua/> 
      </div>
    )
  }
}
