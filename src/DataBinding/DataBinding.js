import React, { Component } from 'react'

export default class DataBinding extends Component {

    // class: thuộc tính, phương thức
    // Binding: thuộc tính, phương thức, biến cục bộ

    //Thuộc tính của class
    avarta = "https://picsum.photos/200";

    //Phương thức
    // sử dụng arrow function nếu có con trỏ this bên trong => arrow là mất ngữ cảnh (context) của this
    //Ngược lại thì dùng hàm bình thường => bên trong hàm nếu dùng this sẽ bị nhận nhầm ngữ cảnh
    renderInfo() {
        //trả về 2 thẻ lớp học và email
        return <div>
            <p>KH001</p>
            <p>test@gmail.com</p>
        </div>
    }
    renderInfo2 = () => {
        return (
            <div>
                <p>KH001</p>
                <p>test@gmail.com</p>
            </div>
        )

    }


    renderObject = () => {
        let pet = {
            name: "Mực",
            age: 1,
            breed: "Chó cỏ",
            img:"https://picsum.photos/id/237/200/300"
        }
        return (
            <div className='col-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={pet.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {pet.name}</h5>
                        <p className="card-text">Age: {pet.age}</p>
                        <p className="card-text">Breed: {pet.breed}</p>
                    </div>
                </div>
            </div>
        )

    }

    //Binding: đưa data lên UI của reactjs
    render() {
        //name: biến cục bộ của phương thức render()
        let name = "Nguyễn thị học viên";

        return (
            //div thẻ jsx => để binding data lên jsx dùng {tenbien}
            <div>
                {/* Binding biến cục bộ */}
                <h3>{name}</h3>
                {/* Binding thuộc tính */}
                <img src={this.avarta} alt="" />

                {/* Binding phương thức */}
                {this.renderInfo()}
                {this.renderInfo2()}

                <div className="row">
                    {this.renderObject()}
                    {this.renderObject()}
                    {this.renderObject()}
                </div>
            </div>
        )
    }
}

// document.getElementById().innerHTML = name
