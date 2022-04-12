import React from 'react'
import Todo from '../../assets/todo.png'

const Projects = () => {
    return (
        <div className='skills-container'>
            <span className='title'>My Recent Projects</span>
            <div className='cards-container'>
                <div className='card' onClick={() => window.open(
                    'https://todolist7474.herokuapp.com/',
                    '_blank'
                )}>
                    <span>TO-DO APP</span>
                    <img src={Todo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects