import React, { Component } from 'react'
//file css khi import sẽ dùng chung cho toàn dự án mặc dù chỉ được import ở component con
import './StyleComponent.css';

import styleModule from './StyleComponent.module.css';

export default class StyleComponent extends Component {
  render() {
      let styleObj = {
        color:'red',
        backgroundColor:'blue'
      }
    //   document.getElementById().style.backgroundColor 
    return (
      <div>
          StyleComponent
          <p>Hello</p>
          <h1 className='styleText'>Demo style Component</h1>
          {/* Nếu muốn css riêng cho 1 component thì có 2 cách
          1. module css
          2. inline css */}

          {/* {}: databinding 
            ${}: truyền biến/giá trị vào chuỗi string
          */}
          <section className={`${styleModule.styleSection} ${styleModule.styleFont} ${styleModule['style-color']}`}>
              <div>Lorem, ipsum dolor.</div>
          </section>

          {/* thuộc tinh style của reactjs là thuộc tính của thẻ JSX nên khi điền giá tri phải sử dụng dấu databinding */}
          {/* style={object} */}
          {/* style={{}} */}
          <section style={styleObj} >
                <h2>demo inline css</h2>
          </section>
          <section style={{
              fontSize:'50px',
              color:'blue'
          }} >
                <h2>demo inline css</h2>
          </section>
    </div>
    )
  }
}

// object.tenthuoctinh
// object["tenthuoctinh"]
