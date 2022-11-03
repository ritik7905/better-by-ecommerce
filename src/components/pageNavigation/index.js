import React from 'react'
import { Link } from 'react-router-dom'

// styles
import "./style.scss"

const PageNavigation = ({ title }) => {
    return (
        <div className='page-navigation'>
            <Link to={"/"}>Home</Link><span> / {title?.charAt(0).toUpperCase() + title?.slice(1)}</span>
        </div>
    )
}

export default PageNavigation