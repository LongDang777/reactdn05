import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    // Khi click button + thì tăng fontsize của thẻ p
    // Khi click button - thì giảm fontsize của thẻ p

    // 1. Xây dựng UI
    // 2. Xác định giá trị cần thay đổi, khi giá trị đó cần thay đổi thì sẽ render lại UI => lưu giá trị đó vào state (xác định state)
    // 3. Xác định hàm sẽ đặt phương thức setState

    // size = 50;

    state={
        size: 50
    }

  render() {
    return (
        // style={{fontSize:'50px'}}
      <div>
          <p style={{fontSize:`${this.state.size}px`}}>Lorem ipsum dolor sit amet.</p>
          <button className='btn btn-success' onClick={() => { 
              //click tăng size
            //   let newState ={
            //       size: this.state.size + 1
            //   }
            //   this.setState(newState);
              this.setState({ size: this.state.size + 1});
           }}>+</button>
          <button className='btn btn-danger'>-</button>
      </div>
    )
  }
}
