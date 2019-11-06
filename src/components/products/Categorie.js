import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Categorie extends Component {
    render() {
        return (
            <LinkCategorie to="/" src={this.props.src}>
                <div className="description">
                    <p>FAHIoN FOR ME</p>
                </div >
            </LinkCategorie >
        );
    }
}

const LinkCategorie = styled(Link)`
        background-image:${props => `url(${props.src})`};
        background-size: cover;
        background-position: center;
        display: block;
        height: 100%;
        margin-bottom: 30px;
        position: relative;
        transform: scale(1);
        transition: all 0.5s ;
        &:hover {
            transform: scale(1.5);
            opacity: 0.7;
            & .description {
                p{
                    left:50%;
                    top:50%;
                    transform: translate(-50%,-50%);
                    color: var(--mainWhite);
                    font-size: 13px;
                }
                :after{
                    width:80px;
                    height: 80px;
                    left:50%;
                    top:50%;
                    transform: translate(-50%,-50%);
                    background-color: var(--mainYellow);
                }
            }

        }
        .description {
            p{
                font-size:16px;
                text-align: left;
                position: absolute;
                color: var(--mainBlack);
                font-weight: 500;
                z-index: 999;
                text-transform: uppercase;
                width: 50px;
                line-height: 1.5;
            }
            &:after {
                content: "";
                position: absolute;
                top: -3%;
                width: 100px;
                height: 100px;
                word-wrap:normal;
                left: 0;
                transform: translateX(-25%);
                background-color: var(--mainWhite);
                border-radius: 50%;
            }
        }
        `
