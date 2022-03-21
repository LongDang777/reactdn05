import React, { Component } from 'react'
import Child from './Child'

export default class LifecycleParent extends Component {

    constructor(props) {
        //phương thức khởi
        super(props);
        this.state = {

        }

        console.log("constructor");
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //chạy các code trước khi render UI
        console.log("getDerivedStateFromProps");
        return null;
    }

    render() {
        console.log("render UI")
        return (
            <div>
                Parent
                <Child />
            </div>
        )
    }
//chạy thư viện: Jquery countUp, owl carousel, BS4, slick 
//có thể bị lỗi => lý do là UI chưa load lên mà đã chạy code của thư viện
//=> khi UI load hoàn chỉnh thì thư viện qua rồi không gắn được hiệu ứng
    componentDidMount(){
        //chạy các code sau khi UI đã hiển thị đầy đủ
        //chạy thư viện: Jquery countUp, owl carousel, BS4, slick 
        //API
        //=> đã có đầy UI thì sẽ gắn được hiệu ứng
        //AntDesign, TailwindCSS, BS React, Materio UI
        console.log("componentDidMount")
    }


}
