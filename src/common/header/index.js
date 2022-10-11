import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "antd";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import {
    About_Page,
    Blogs_Page,
    Cart_Page,
    Contact_Page,
    Features_Page,
    Home_Page,
    Sale_Page,
    Shop_Page,
} from "../routes";
// styles
// ===========================
import "./style.scss";
// ===========================
const { Header } = Layout;

const AppHeader = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <Header className="app-header">
            <nav className="app-navbar container active">
                <NavLink to={Home_Page} className="logo-link">
                    <h2>Be <span>Better</span></h2>
                </NavLink>
                <ul className="lists">
                    <li>
                        <NavLink to={Home_Page} className={(props) => props.isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Shop_Page} className={(props) => props.isActive ? "active" : ""}>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Sale_Page} className={(props) => props.isActive ? "active" : ""}>
                            Sale
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Features_Page} className={(props) => props.isActive ? "active" : ""}>
                            Features
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Blogs_Page} className={(props) => props.isActive ? "active" : ""}>
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={About_Page} className={(props) => props.isActive ? "active" : ""}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={Contact_Page} className={(props) => props.isActive ? "active" : ""}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Cart_Page} className="navbar-link cart-trolley-link">
                            <RiShoppingCartLine className="cart-trolley" />
                            <span className="cart-total-items">{10}</span>
                        </NavLink>
                    </li>
                </ul>

                {/* two buttons for open and close of menu */}
                <div className="mobile-navbar-btn">
                    <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => { setToggle(!toggle) }} />

                    <div className={`sidebar ${toggle ? "active-sidebar" : ""}`}>
                        <GrClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => { setToggle(!toggle) }} />
                        <ul>
                            <li>
                                <NavLink to={Home_Page} className={(props) => props.isActive ? "active" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={Shop_Page} className={(props) => props.isActive ? "active" : ""}>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={Sale_Page} className={(props) => props.isActive ? "active" : ""}>
                                    Sale
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={Sale_Page} className={(props) => props.isActive ? "active" : ""}>
                                    Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={Blogs_Page} className={(props) => props.isActive ? "active" : ""}>
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={About_Page} className={(props) => props.isActive ? "active" : ""}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={Contact_Page} className={(props) => props.isActive ? "active" : ""}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={Cart_Page} className="navbar-link cart-trolley-link">
                                    <RiShoppingCartLine className="cart-trolley" />
                                    <span className="cart-total-items">{10}</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </Header>
    );
};

export default AppHeader;
