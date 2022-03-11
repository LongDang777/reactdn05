import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

  renderProducts = () => {
      let {mangSP} = this.props;
      return mangSP.map((sp) => { 
        return <div className='col-4' key={`Pro${sp.maSP}`} >
            <SanPham sanPham = {sp}/>
        </div>
      });
  }
  render() {
    return (
      <div className='row'>
        {this.renderProducts()}
      </div>
    )
  }
}
