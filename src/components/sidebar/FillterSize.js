import React, { Component } from 'react';
import styled from 'styled-components';

class FilterSize extends Component {
    render() {
        return (
            <WidgetSize>
                <h4 className="title-widget text-center pt-4">Size</h4>
                <p className="text-center">
                    <span>X</span>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                </p>
            </WidgetSize>
        );
    }
}
const WidgetSize = styled.div`
    background-color: var(--threeWhite);
    border: 1px solid var(--secondWhite);
    padding-bottom: 10px;
    p {
        border-top: 1px solid var(--secondWhite);
        padding-top: 30px;
        span {
            background-color: var(--secondWhite);
            line-height: 30px;
            display: inline-block;
            width: 30px;
            height: 30px;
            border: 1px solid #ececec;
            box-shadow: -1px 1px 2px rgba(0,0,0,0.3);
            margin: 0px 10px;
            font-weight: 600;
            font-size: 14px;
        }
    }
`
export default FilterSize;