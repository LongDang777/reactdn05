import React, { Component } from 'react'
import Child from './Child'
import ChildFooter from './ChildFooter';

export default class LifecycleParent extends Component {

    constructor(props) {
        //phương thức khởi
        super(props);
        this.state = {
            number:0,
            like: 0,
            isLogin: false,
            product:{id:1,name:"Product1"}
        }

        console.log("constructor");
    }

    // state thay đổi khi setState()
    //prop thay đổi: 
    //truyền state của Parent thành prop của Child thì prop của Child thay đổi
    // lấy state(reducer) từ store về thành props của Component

  
    static getDerivedStateFromProps(newProps, currentState) {
        //chạy các code trước khi render UI
        console.log("getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(newProps, newState){
        console.log("shouldComponentUpdate");
        
        console.log("newProps parent", newProps);

        console.log("newState parent", newState);


        return true;
    }

    render() {
        console.log("render UI")
        return (
            <div>
                Parent
                <p>Number: {this.state.number}</p>
                <p>Like: {this.state.like}</p>
                <button className='btn btn-success' onClick={() => { 
                    this.setState({
                        number:this.state.number + 1
                    })
                 }}>
                    +
                </button>
                <button className='btn btn-danger' onClick={() => { 
                    this.setState({
                        like:this.state.like + 1
                    })
                 }}>Like</button>
                <button className='btn btn-danger' onClick={() => { 
                    this.setState({
                        isLogin:true
                    })
                 }}>
                    Login
                </button>

                 <p>{this.state.isLogin}</p>
               
               
               <button className='btn btn-danger' onClick={() => { 
                   //Tạo đối tương mới => địa chỉ mới
                // State đổi địa chỉ
                //    let newPro = {id:2,name:"Product2"}
                //    let newState = {
                //     product:newPro
                //    }
                //    this.setState(newState);

                // chỉ muốn thay đổi 1 vài thuộc tính của đối tương
                let newPro = this.state.product;
                newPro.name = "Sam sung";
                let newState = {
                        // product:newPro
                        product:{...newPro}
                       }
                this.setState(newState);

                }}>Change product</button>
               <p>Tên Sản phẩm: {this.state.product.name}</p>
                {/* Giả sử:
                    đổi giá trị number thì render lại UI của con

                    đổi giá trị của like thì ko render lại Ui của con
                 */}
                 
                 {this.state.number > 2 ? "" : <Child product={this.state.product} number={this.state.number} like={this.state.like} /> }
                
                
                
                
                 <ChildFooter/>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
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
