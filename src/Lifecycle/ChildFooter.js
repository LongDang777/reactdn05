import React, { Component } from 'react';
import { PureComponent } from 'react';

export default class ChildFooter extends PureComponent {
  
    // shouldComponentUpdate(newProps, newState){
    //     console.log("shouldComponentUpdate footer");
    //     return false;
    // }
  
    // PureComponent: tự nhận biết , nếu có truyền props thì render lại UI
    // ngược lại ko render lại UI

    render() {
        console.log("render footer");
    return (
       
      <div>ChildFooter</div>
    )
  }
}
