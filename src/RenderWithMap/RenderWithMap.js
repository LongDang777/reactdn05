import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    arrProduct = [
        { 'id': 1, 'img': "https://picsum.photos/200/300?random=1", 'name': "San pham 1" },
        { 'id': 2, 'img': "https://picsum.photos/200/300?random=2", 'name': "San pham 2" },
        { 'id': 3, 'img': "https://picsum.photos/200/300?random=3", 'name': "San pham 3" },
        { 'id': 4, 'img': "https://picsum.photos/200/300?random=4", 'name': "San pham 4" },
    ]

    renderProducts = () => {
        // ES6 return `<tr></tr>`
        // return chỉ trả về được 1 giá trị => dùng kiểu obj, array để tra về nhiều giá trị
        //!Reactjs return <tr></tr><tr></tr>
        //?Reactjs return [<tr></tr>,<tr></tr>]

        // B1: tao 1 bien content kiểu mảng chứa các đối tượng tr
        // B2: duyet mảng
        // B3: tạo từng đối tượng tr => push() vào mảng content
        // B4: return content
        //? shift + alt + A
        /*   let content = [];
          for (let sp of this.arrProduct) {
              let trObj = <tr>
                  <td>{sp.id}</td>
                  <td>
                      <img style={{width:'50px',height:'50px'}} src={sp.img} alt="" />
                  </td>
                  <td>
                      {sp.name}
                  </td>
              </tr>
              content.push(trObj);
          }
  
          return content; */

        //   map(): return không dừng hàm, chỉ dừng khi duyệt mảng
        //?   => return: trả về 1 mảng mới (mảng các tr)
        // let content = [];
        // let content = this.arrProduct.map((sp) => {
        //trả về các mảng tr khỏi hàm renderProducts
        return this.arrProduct.map((sp,index) => {
            //kết thúc map trở về mảng mới
            //? những đối tuong thẻ cùng cấp (anh em) thì phải thêm thuộc tính key
            //? key chứa giá trị duy nhất , nếu không có bất kỳ giá trị nào phù hợp mới dùng index(vị trí phần tử) thay thế

                return <tr key={`sp${sp.id}`} >
                            <td>{sp.id}</td>
                            <td>
                                <img style={{ width: '50px', height: '50px' }} src={sp.img} alt="" />
                            </td>
                            <td>
                                {sp.name}
                            </td>
                    </tr>
        });

        // return content;
    }

    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProducts()}
                    </tbody>
                </table>

            </div>
        )
    }
}
