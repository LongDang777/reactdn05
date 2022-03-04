import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ExerciseCarStore extends Component {
    products = [
        { id: 1, name: 'black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/CarBasic/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/CarBasic/products/steel-car.jpg', price: 4000 }
        ];

        state={
          car:{ id: 1, name: 'black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 }
        }

        showInfo = (newCar) => {
          this.setState({car:newCar});
        }

  render() {
    return (
      <div className='container'>
          <ProductList xemChiTiet={this.showInfo} arrProducts={this.products} />
          <Modal carState={this.state.car}/>
      </div>
    )
  }
}
