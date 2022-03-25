import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {
    constructor(props) {
        //phương thức khởi
        super(props);
        this.state = {

        }
        console.log("constructor Child");
        this.timeOut = {}
    }

   


    static getDerivedStateFromProps(newProps, currentState) {
        //chạy các code trước khi render UI
        console.log("getDerivedStateFromProps Child");
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     //prop ban đầu trước khi setState 
    //     console.log("this.props Child", this.props);
    //     //newProp là giá trị sau khi thay đổi
    //     console.log("newProps Child: ", newProps);

    //     //State của chính component con
    //     console.log("newState Child: ", newState);
    //     console.log("shouldComponentUpdate Child");

    //     //render lại
    //     // return true;

    //     //Ko render lại
    //     // return false;

    //     // Solution
    //     // this.props.like: trước thay đổi
    //     //newProps.like: sau thay đổi
    //     if(this.props.like !== newProps.like){
    //         //nếu like thay đổi thì không render lại
    //         return false;
    //     }else if(this.props.number !== newProps.number){
    //         //nếu number đổi thì render lại UI
    //         return true;
    //     }

    //     return false;

    // }

    //


    //Nếu props thay đổi thì render lại UI con
    //Ngược lại thì ko render
    //Nếu cha render lại mà không thay đổi prop của con thì không render lại UI của con
    //=> giúp tăng performance khi xử lý render lại


    render() {
        console.log("render UI Child")
        return (
            <div>Child
                <p>Tên sản phẩm: {this.props.product.name} </p>
                <p>Number prop: {this.props.number}</p>
                <p>Like prop: {this.props.like}</p>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        //chạy các code sau khi UI đã hiển thị đầy đủ
        console.log("componentDidUpdate Child")
    }


    componentDidMount() {
        //chạy các code sau khi UI đã hiển thị đầy đủ
        console.log("componentDidMount Child");
        this.timeOut= setInterval(() => { 
            //real time (thời gian thưc)
            //kiểm tra tin chat
            console.log("Check new message");
         }, 1000)
        setInterval(() => { 
            //real time (thời gian thưc)
          
            console.log("Check new post");
         }, 1000)

    }


    componentWillUnmount(){
        clearInterval(this.timeOut);

        //chạy trước khi component Child remove khỏi giao diện
        //Khi xư lý các điều kiện if else để hiển thị hoặc không hiển thị component con trên UI
        console.log("componentWillUnmount");

    }


}
