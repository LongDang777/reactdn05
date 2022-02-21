import React, { Component } from 'react'
import ContentComponent from './ContentComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import NavComponent from './NavComponent.js'
// rcc
export default class HomeComponent extends Component {
    render() {
        return (
            
            <div className='row'>
                <div className='col-12'>
                    {/* headercomponent */}
                    <HeaderComponent/>
                </div>
                <div className='col-4'>
                    {/* navcomponent */}
                    <NavComponent/>
                </div>
                <div className="col-8">
                    {/* content component */}
                    <ContentComponent/>
                </div>
                <div className='col-12'>
                    {/* footercomponent */}
                    <FooterComponent/>
                </div>
            </div>
        )
    }
}
