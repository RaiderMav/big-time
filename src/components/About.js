import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class About extends Component {
  render () {
    return (
      <div className='home-container'>
        <h1>About Mathieu Myrick</h1>
        <Link className='button' to='/gallery'>
                        Photo Gallery
                    </Link>
      </div>
    )
  }
}
