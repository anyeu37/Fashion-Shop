import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class News extends Component {
    render() {
        return (
            <NewsStyle src={this.props.src} to="/">
                <div className="news-body">
                    <div className="news-date">
                        <span className="news-day">20</span><br />
                        <span className="news-moth">MAR</span>
                    </div>
                </div>
                <div className="news-footer">
                    <div className="news-author pb-2">
                        <span >POST ON: <i>Phan Ba an</i></span>
                    </div>
                    <div className="news-title">
                        <h4>Openning Branches</h4>
                    </div>
                    <div className="news-short">
                        <p className="text-desc">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                    </div>
                </div>
            </NewsStyle >
        );
    }
}
const NewsStyle = styled(Link)`
    background: var(--threeWhite);
    text-decoration: none !important;
    .news-body {
        height: 250px;
        background:${props => `url(${props.src})`};
        background-size: cover;
        background-position: center;
        position: relative;
        .news-date{
                position: absolute;
                bottom: -15%;
                left: 0;
                content: "";
                background-color: var(--mainYellow);
                color: var(--mainWhite);
                font-size: 30px;
                padding: 15px 10px;
                font-weight: 700;
                line-height: 0.8;
                text-transform: uppercase;
                .news-moth {
                    font-size: 16px;
                }
            }
        }
        .news-footer {
            padding: 20px 16px 20px 80px;
            transition: all 0.5s;
            &:hover h4{
                color: var(--mainYellow);
            }
        }
    `
export default News;