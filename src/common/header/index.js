import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar, Image, Layout } from 'antd'
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { About_Page, Blogs_Page, Cart_Page, Contact_Page, Home_Page, Sale_Page, Shop_Page } from '../routes'
// styles
// ===========================
import "./style.scss"
import { logo } from '../../assets'
// ===========================
const { Header } = Layout
const AppHeader = () => {

    const [toggle, setToggle] = useState(false)


    // const toggleSidebar = () => {
    //     setToggle(!toggle)
    // }
    return (
        <Header className='app-header'>

        </Header>
    )
}

export default AppHeader