import React from 'react'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav>
        <span>Personal</span>
        <div>
            <a href="/">Home</a>
            <a href="#footer">About Me</a>
        </div>
    </nav>
  )
}

export default NavigationBar