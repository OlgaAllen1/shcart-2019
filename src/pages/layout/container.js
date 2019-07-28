import React, { Component } from 'react'
import './container.css'
import MainNavbar from './main-navbar/component'

export class Layout extends Component {
  render () {
    return (
      <div className="layout-container">
        <MainNavbar/>
      </div>

    )
  }

}

export default Layout
