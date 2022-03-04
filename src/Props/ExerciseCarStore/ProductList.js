import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    renderProducts = () => {
        let { arrProducts,xemChiTiet } = this.props;
        return arrProducts.map((sp,index) => {
            return <div className="col-3" key={`car${index}`}>
                <ProductItem xem={xemChiTiet}  sanPham={sp}/>
            </div>
        })
    }
    render() {
        console.log(this.props.arrProducts);
        return (
            <div className='row'>
                {this.renderProducts()}
            </div>
        )
    }
}
