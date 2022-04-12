import React from 'react'
import './Design.css'

const Design = (props) => {
    return (
        <div className='design-container'>
            <svg style={props.align === "left" ? { left: '-30vw', top:'-40vh' } : null} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg">
                <path id="blob" d="M404.5,295.5Q341,341,295.5,409Q250,477,204.5,409Q159,341,130.5,295.5Q102,250,105.5,179.5Q109,109,179.5,127Q250,145,313.5,134Q377,123,422.5,186.5Q468,250,404.5,295.5Z" fill="#eaccf7" />
            </svg>
        </div>
    )
}

export default Design