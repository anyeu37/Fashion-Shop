import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.png';

class Navbar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-light sticky-top">
                    <div className="container">
                        <Link to="/home" className="navbar-brand" ><img src={logo} alt="logo" width="100" height="50" /></Link>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Trang chủ </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/introduct">Giới thiệu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Sản phẩm</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/news">Tin Tức</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Liên hệ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart"><i className="fas fa-cart-plus"></i> Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;