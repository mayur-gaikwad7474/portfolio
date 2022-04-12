import React from 'react'
import './Skills.css'
import JS from '../../assets/js.png'
import CSS from '../../assets/html-5.png'
import HTML from '../../assets/css-3.png'

const Skills = () => {
  return (
    <div className='skills-container'>
      <span className='title'>My Awesome Skills</span>
      <div className='cards-container'>
        <div>
          <span>HTML</span>
          <img src={HTML} alt="" />
        </div>
        <div>
          <span>CSS</span>
          <img src={CSS} alt="" />
        </div>
        <div>
          <span>Javascript</span>
          <img src={JS} alt="" />
        </div>
        <div>
          <span>React Js</span>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skills