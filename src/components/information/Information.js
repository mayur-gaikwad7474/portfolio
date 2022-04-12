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
            <div className='images'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg">
                    <path id="blob" d="M404.5,295.5Q341,341,295.5,409Q250,477,204.5,409Q159,341,130.5,295.5Q102,250,105.5,179.5Q109,109,179.5,127Q250,145,313.5,134Q377,123,422.5,186.5Q468,250,404.5,295.5Z" fill="#838BC5" />
                </svg>

                <div className='profile'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg">
                        <path id="blob" d="M404.5,295.5Q341,341,295.5,409Q250,477,204.5,409Q159,341,130.5,295.5Q102,250,105.5,179.5Q109,109,179.5,127Q250,145,313.5,134Q377,123,422.5,186.5Q468,250,404.5,295.5Z" fill="rgb(255, 104, 49)" />
                    </svg>
                    <img src={Profile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Information