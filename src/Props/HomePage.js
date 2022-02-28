import React, { Component } from 'react'
import Products from './Products'

export default class HomePage extends Component {


    // Props: đối tượng có sẵn của React Class component
    // Giúp truyền data từ component cha sang component con
    //props cho phép truyền nhiều kiểu dữ liệu bao gồm cả object

    arrProduct=[
        {'id':1, 'img':"https://picsum.photos/200/300?random=1", 'name': "San pham 1"},
        {'id':2, 'img':"https://picsum.photos/200/300?random=2", 'name': "San pham 2"},
        {'id':3, 'img':"https://picsum.photos/200/300?random=3", 'name': "San pham 3"},
        {'id':4, 'img':"https://picsum.photos/200/300?random=4", 'name': "San pham 4"},
    ]
    render() {
        return (
            <div className='container'>
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <div className="col-3">
                        {/* <Products nameProduct="SP1" imgProduct="https://picsum.photos/id/237/200/300" price={100} /> */}
                        <Products productItem={this.arrProduct[0]} />
                    </div>
                    <div className="col-3">
                        {/* <Products imgProduct="https://picsum.photos/id/237/200/300" /> */}
                        <Products productItem={this.arrProduct[1]} />
                    </div>
                    <div className="col-3">
                        {/* <Products imgProduct="https://picsum.photos/id/237/200/300" /> */}
                        <Products productItem={this.arrProduct[2]} />
                    </div>
                    <div className="col-3">
                        {/* <Products imgProduct="https://picsum.photos/id/237/200/300" /> */}
                        <Products productItem={this.arrProduct[3]} />
                    </div>
                </div>
            </div>
        )
    }
}
