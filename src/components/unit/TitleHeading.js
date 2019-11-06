import React, { Component } from 'react';
import styled from 'styled-components';

class TitleHeading extends Component {
    render() {
        const { title, description } = this.props;
        return (
            <Title className="TitleHeading text-center">
                <h3><span>{title}</span></h3>
                <p className="text-desc">{description}</p>
            </Title>
        );
    }
}

const Title = styled.div`
    padding: 80px 0px 80px;
    h3 {
        letter-spacing: 0.3rem;
        margin-bottom: 20px;
        span{
            position: relative;
            &:after {
                position: absolute;
                top: 49%;
                right: -80px;
                bottom: 0;
                content: '';
                width: 60px;
                height: 2px;
                background: #FFC300;
            }
            &:before {
                    content:"";
                    position: absolute;
                    top: 49%;
                    left: -80px;
                    width: 60px;
                    height: 2px;
                    background-color: var(--mainYellow);
                }
            }
        }
`
export default TitleHeading;