import React, { Component } from 'react'

export default class StateDemo extends Component {

    // isLogin = false;
    username = "spiderman";
    //state là thuôc tính được định nghĩa sẵn của lớp Component của React
    // chứa các giá trị cần thay đổi để render lại giao diện
    state = {
        isLogin: false
    }
    //    renderLogin = () => {
    //        if(this.isLogin){
    //            return <span>{this.username}</span>;
    //        }
    //        return <button className='btn btn-success' onClick={() => { 
    //            //Expected: khi click button thì isLogin = true => UI sẽ hiển thị username
    //            //Result: isLogin đã đổi nhưng UI không đổi
    //             this.isLogin = true;
    //             console.log(this.isLogin);
    //             // render lại => load lại UI
    //             //Phương thức render() chỉ chạy 1 lần duy nhât khi load web và không thể chạy lại khi gọi lại nó
    //             // this.render();
    //         }}>Login</button>
    //    }
    renderLoginState = () => {
        if (this.state.isLogin) {
            return <span>{this.username}</span>;
        }
        return <button className='btn btn-success' onClick={() => {
            this.handleState();
        }}>Login</button>

    }
    handleState = async () => {
        // Không được gán giá trị trưc tiếp cho state vì sẽ không render lại UI
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);

        //Sử dụng setState() để khi gán giá trị mới cho state thì UI sẽ được render lại
        // this.setState(đối tượng state mới)
        //setState là bất đồng bộ

        let newState ={
            isLogin:true
        }
        // this.setState(newState);
        // console.log(this.state.isLogin);

        // C1: dùng tham số thứ 2 của setState
        // this.setState(newState,() => { 
        //     //chạy sau khi đã chạy xong hàm setState
        //     console.log(this.state.isLogin);
        //  });
        
        //C2: sử dụng asyn/await
        await this.setState(newState);
        console.log(this.state.isLogin);
        
    }

    render() {
        return (
            <div>
                {/* Nên convert trước rồi mới Format sau */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        {/* Khi đã đăng nhập (isLogin = true) => hiển thị username
                        Ngược lại, hiển thị button Login (isLogin=false) */}
                        <div>
                            {/* Toán tử 3 ngôi: chỉ dùng khi code xử lý ngắn */}
                            {/* {this.isLogin == true ? <span>{this.username}</span> : <button className='btn btn-success'>Login</button>} */}

                            {/* {this.renderLogin()} */}

                            {this.renderLoginState()}

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
