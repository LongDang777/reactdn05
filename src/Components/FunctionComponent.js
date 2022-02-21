import React from 'react'
// rfc: cách tạo nhành funxtion component

export default function FunctionComponent() {



    //Lệnh return trả về UI của component
    //chỉ chứa 1 thẻ cha nằm bên ngoài và bao bọc các thẻ con khác
    return (
        //div trong reactjs là thành phần JSX (thành phần thẻ của reactjs)
        <div className="testClass">
            FunctionComponent
               <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )

}
