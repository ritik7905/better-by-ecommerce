import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "antd";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgClose, CgMenu } from "react-icons/cg";
import {
    About_Page,
    Cart_Page,
    Contact_Page,
    Home_Page,
    Products_Page,
} from "../routes";
// styles
// ===========================
import "./style.scss";
import { images } from "../../assets/images";
// ===========================
const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header className="app-header">
            <nav className="navbar container">
                <NavLink to={Home_Page}>
                    <img src={images.logo} alt="cmp-logo" />
                </NavLink>
                <ul className="lists">
                    <li>
                        <NavLink to={Home_Page} className={(props) => props.isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={About_Page} className={(props) => props.isActive ? "active" : ""}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Products_Page} className={(props) => props.isActive ? "active" : ""}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Contact_Page} className={(props) => props.isActive ? "active" : ""}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Contact_Page} className="navbar-link login-link">
                            Login
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
                    <CgMenu name="menu-outline" className="mobile-nav-icon" />
                    <CgClose name="close-outline" className="mobile-nav-icon close-outline" />
                </div>
            </nav>
        </Header>
    );
};

export default AppHeader;
