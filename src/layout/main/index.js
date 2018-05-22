import React, { Component } from 'react'

import Nav from '../../components/Nav'
// import Footer from '../../components/Footer'

import '../../css/skeleton.css'
import './App.css'

class AppLayout extends Component {

  renderChildren() {
      const childrenWithProps = React.Children.map(this.props.children,
       (child) => React.cloneElement(child)
      )
      return childrenWithProps
    }

    render() {
      return (
        <div className="App">
          <Nav/>
          <div className="main-content">
            { this.renderChildren() }
          </div>
        </div>
      )
    }
  }

export default AppLayout
