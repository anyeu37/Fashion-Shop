import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <BoxProduct className="box-product" src={this.props.src}>
                <div className="box-body">
                    <div className="box-badge">
                        <p>new</p>
                    </div>
                    <div className="box-cart text-center">
                        <p>
                            <span>
                                <Link to="/products">
                                    <i className="fas fa-cart-plus"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="">
                                    <i className="far fa-eye"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="">
                                    <i className="fas fa-heart"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="">
                                    <i className="fas fa-dollar-sign"></i>
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="box-footer text-center">
                    <h4 className="title-product">FLORAL DRESS</h4>
                    <p className="text-yellow ">$300.00</p>
                </div>
            </BoxProduct>
        );
    }
}
const BoxProduct = styled.div`
    .box-body {
        background-image: ${props => `url(${props.src})`};
        background-size: cover;
        background-position: center;
        height: 350px;
        position: relative;
        .box-badge {
            position: absolute;
            top: 3%;
            left: 3%;
            background-color: var(--mainYellow);
            border-radius: 3px;
            p{
                margin-bottom: 0px;
                font-size: 11px;
                color: var(--mainWhite);
                padding: 0.3em 0.5em;
                text-transform: capitalize;
            }
        }
        .box-cart {
            background-color: rgba(0,0,0,0.8);
            position: absolute;
            left:  0;
            bottom: 0;
            width: 100%;
            opacity: 0;
            transition: all 0.8s;
            p {
                margin-bottom: 0px;
                font-size: 12px;
                span{
                    display:inline-block;
                    a {
                        display: block;
                        color: var(--mainWhite);
                        padding: 13px;
                        &:hover{
                            background-color: var(--mainYellow);
                        }
                    }
                }
            }
        }
        &:hover .box-cart {
            opacity: 1;
        }
    }
    .box-footer{
        padding: 20px 0px;
    }
`
export default Product;