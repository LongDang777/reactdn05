import React, { Component } from 'react'

import { connect } from 'react-redux';

class FormDangKy extends Component {

    state = {
        values:{
            taiKhoan:'',
            hoTen:'',
            matKhau:'',
            sdt:"",
            email:"",
            loaiND:"khachHang"
        },
        errors:{
            taiKhoan:"",
            hoTen:"",
            matKhau:"",
            sdt:"",
            email:"",
            loaiND:""
        }
    }

    // onChange: giá trị của control của form thay đổi thì gọi ngay onChange
    handleInput = (event) => {
        // debugger;
        // sự kiện mặc định của thẻ html
        //event.target => thẻ đang được tác động
        // console.log(event.target);
        //event.target.value, event.target.name
        let {value, name} = event.target;
        let newValues = {...this.state.values};
        //? goi thuoc tinh C1
        // newValues.taiKhoan = valueTK;
        //? C2
        // newValues[taiKhoan] = valueTK;
        // object literal
        newValues[name] = value;

        let newError = {...this.state.errors};
        let message = "";
        //kiểm tra rỗng
        if(value.trim() === ""){
            //thông báo lỗi
            message = name + " không được để trống";
        }
        let attrValue = event.target.getAttribute("data-type");
        let reg = "";
        // kiểm tra email
        if(attrValue === "email" ){
            reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // kiểm tra nếu không đúng định dạng
            if(!reg.test(value)){
                //không đúng thì thông báo lỗi
                message = name + " không đúng định dạng";
            }
        }
        newError[name] = message;
        this.setState({
            values:newValues,
            errors:newError
        });
        // object literal
        // let newState ={
        //     [name]: value
        // }
        // xét giá trị mới cho state, chạy lại hàm render()
        // this.setState(newState,
        //     // () => { 
        //     //     console.log(this.state);
        //     //  }
        // );
    }

    handleSubmit = (event) => { 
        //ngăn không load trang khi submit
        event.preventDefault();
        console.log(this.state);

        //kiểm tra lỗi
        let isValid = true;

        // duyệt từng thuộc tính của obj
        for(let key in this.state.errors){
            // obj literal
            if(this.state.errors[key] !==""){
                isValid = false;
                // dừng vòng lăp
                break;
            }
        }
        if(!isValid){
            //nếu false => dừng hàm
            alert("Còn lỗi nè");
            return;
        }

        //đẩy state lên store
        let action={
            type:"THEM_NGUOI_DUNG",
            nguoiDung: this.state.values
        }
        this.props.dispatch(action);

     }

    render() {
        let {taiKhoan,hoTen,matKhau,sdt,email,loaiND} = this.state.errors
        return (
            <div className="card mt-5">
                <form onSubmit={this.handleSubmit} >
                    <div className="card-header bg-dark text-white">
                        Form Đăng Ký
                    </div>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Tài Khoản</label>
                                {/* <input onChange={(event) => { 
                                    console.log(event.target);
                                 }} /> */}
                                <input onChange={this.handleInput} type="text" name="taiKhoan" className="form-control" />
                                <p className='text-danger'>{taiKhoan}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Họ Tên</label>
                                <input onChange={this.handleInput} type="text" name="hoTen" className="form-control" />
                                <p className='text-danger'>{hoTen}</p>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Mật Khẩu</label>
                                <input onChange={this.handleInput} type="password" name="matKhau" className="form-control" />
                                <p className='text-danger'>{matKhau}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Số điện thoại</label>
                                <input onChange={this.handleInput} type="text" name="sdt" className="form-control" />
                                <p className='text-danger'>{sdt}</p>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input data-type="email"  onChange={this.handleInput} type="email" name="email" className="form-control" />
                                <p className='text-danger'>{email}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mã loại người dùng</label>
                                <select onChange={this.handleInput} name='loaiND' className="form-control">
                                    {/* <option>Hãy chọn loại</option> */}
                                    <option value='khachHang'>Khách Hàng</option>
                                    <option value='nhanVien' >Nhân Viên</option>
                                </select>
                                <p className='text-danger'>{loaiND}</p>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer bg-dark">
                        <button className='btn btn-success'>Đăng Ký</button>
                        <button className='btn btn-primary'>Cập Nhật</button>
                    </div>
                </form>
            </div >

        )
    }
}


export default connect()(FormDangKy);