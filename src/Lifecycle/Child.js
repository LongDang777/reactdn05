import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        //phương thức khởi
        super(props);
        this.state = {

        }
        console.log("constructor Child");
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //chạy các code trước khi render UI
        console.log("getDerivedStateFromProps Child");
        return null;
    }
    render() {
        console.log("render UI Child")
        return (
            <div>Child</div>
        )
    }

    componentDidMount() {
        //chạy các code sau khi UI đã hiển thị đầy đủ
        console.log("componentDidMount Child")
    }

}
