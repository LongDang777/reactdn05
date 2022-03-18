import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableDSND from './TableDSND'

export default class BTQLND extends Component {
  render() {
    return (
      <div className='container'>
          <FormDangKy/>
          <TableDSND/>
      </div>
    )
  }
}
