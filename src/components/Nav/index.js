import React, { Component } from 'react'

import './style.css'


class Nav extends Component {

  burgerToggle = () => {
    let linksEl = document.querySelector('.narrowLinks');

    linksEl.style.display === 'block' ? (
      linksEl.style.display = 'none'
    ) : (
      linksEl.style.display = 'block'
    )
  }

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrowLinks">
            <a href="#" onClick={this.burgerToggle}>Link 1</a>
            <a href="#" onClick={this.burgerToggle}>Link 2</a>
            <a href="#" onClick={this.burgerToggle}>Link 3</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav