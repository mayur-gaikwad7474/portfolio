import React from 'react'
import './Information.css'
import Profile from '../../assets/profile.png'

const Information = () => {
    return (
        <div className='info-container'>
            <div className='info'>
                <span className='title'>Hy! I Am</span>
                <span className='name'>Pratiksha Dighe</span>
                <p>I am a front-end developer. I have completed my Bachelor's in computer application. I work on web development. I've also created some to-do apps and I'm looking to work with some great organizations to improve my skills and contribute to the organization.</p>
                <a href='#footer'>Contact Me</a>
            </div>
                <img src={Profile} alt="" />
        </div>
    )
}

export default Information