import React, { Component } from 'react'

export default class DemoCar extends Component {

    // B1: xây UI
    //B2: định nghĩa state - Xác đinh biến nào cần lưu trong state (biến cần thay đổi giá trị và sau khi thay đổi cần render lại UI)
    //B3: xây dựng hàm sẽ chứa setState => hàm đó sẽ được gắn vào sự kiện (click, change, key)

    // npm run build

    // imgCar="./img/CarBasic/products/black-car.jpg";

    // Dùng state
    //B1:đặt biến cần đổi vào state
    //B2: gọi hàm setState
    state = {
        imgCar: "./img/CarBasic/products/black-car.jpg"
    }

    // met
    changeCar = (color) => {
        let newState ={
            imgCar: `./img/CarBasic/products/${color}-car.jpg`
        }
        this.setState(newState);
    }

  render() {
      let styleIcon = {
        width:'50px',
        height:'50px' 
      }
      console.log(this.state.imgCar);
    return (
      <div className='container'>
          <div className="row">
              <div className="col-8">
                  <img className='img-fluid' src={this.state.imgCar} alt="" />
              </div>
              <div className="col-4">
                  <div className='mb-3 d-flex justify-content-between' 
                  onClick={() => { 
                      this.changeCar('black');
                   }}>
                      <img style={{width:'50px',height:'50px' }} src="./img/CarBasic/icons/icon-black.jpg" alt="" />
                      <span>Crytal Black</span>
                  </div>
                  <div className='mb-3 d-flex justify-content-between' onClick={() => { 
                    //   this.imgCar = "./img/CarBasic/products/steel-car.jpg";
                    //   console.log(this.imgCar);
                        
                    this.changeCar('steel');


                   }}>
                      <img style={styleIcon} src="./img/CarBasic/icons/icon-steel.jpg" alt="" />
                      <span>Steel</span>
                  </div>
                  <div className='mb-3 d-flex justify-content-between' onClick={() => { 
                      this.changeCar('silver');
                   }} >
                      <img style={styleIcon} src="./img/CarBasic/icons/icon-silver.jpg" alt="" />
                      <span>Silver</span>
                  </div>
                  <div className='mb-3 d-flex justify-content-between' 
                    onClick={() => { 
                        this.changeCar('red');
                     }}
                  >
                      <img style={styleIcon} src="./img/CarBasic/icons/icon-red.jpg" alt="" />
                      <span>Red</span>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
