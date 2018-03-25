import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div className='home-container'>
        <h1>Mathieu Myrick's Home Page</h1>
        <Link className='button' to='/gallery'>
                        Photo Gallery
                    </Link>
      </div>
    )
  }
}
