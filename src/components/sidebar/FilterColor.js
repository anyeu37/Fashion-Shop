import React, { Component } from 'react';
import styled from 'styled-components';

class FilterColor extends Component {
    render() {
        return (
            <WidgetColor>
                <h4 className="title-widget text-center pt-4">Màu sắc</h4>
                <p className="text-center">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </WidgetColor>
        );
    }
}
const WidgetColor = styled.div`
    background-color: var(--threeWhite);
    border: 1px solid var(--secondWhite);
    p {
        border-top: 1px solid var(--secondWhite);
        padding-top: 30px;
        span {
            display: inline-block;
            width: 30px;
            height: 30px;
            border: 1px solid var(--secondWhite);
            margin: 0px 10px;
            &: nth-child(1){
                background-color: green;
            }
            &: nth-child(2){
                background-color: yellow;
            }
            &: nth-child(3){
                background-color: black;
            }
            &: nth-child(4){
                background-color: red;
            }
        }
    }
`
export default FilterColor;