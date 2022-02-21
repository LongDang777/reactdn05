import React, { Component } from 'react';

class HandleEvent extends Component {

    name = "Nguyễn Thị Học VIên"

    showName=()=>{
        //chuỗi string => ${tên thuộc tính}
        alert(`Ten hoc vien: ${this.name} `);
    }
    // showName(){
    //     //chuỗi string => ${tên thuộc tính}
    //     alert(`Ten hoc vien: ${this.name} `);
    // }
    showInfoParam = (khoaHoc) => {
        alert(`Khóa Học: ${khoaHoc} `);
    }

    render() {
        let khoaHoc = "KH001";
        return (
            //thẻ JSX => {ten thuoc tinh}
            <div>
               {/* <button onClick={this.showName} >Click Me</button>
               {this.name} */}
               {/* Nếu có dấu tròn sẽ chạy ngay khi load trang */}
               {/* <button onClick={this.showInfoParam(khoaHoc)} >Click Me</button> */}
               {/* event: tham số luôn tồn tai trong hàm ẩn danh của sự kiện 
                 event.target: gọi tới thẻ đang được tác động
               */}
               <button onClick={(event) => { 
                   event.target.style.backgroundColor = "red";
                   this.showInfoParam(khoaHoc);
                }} >Click Me</button>
            </div>
        );
    }
}

export default HandleEvent;