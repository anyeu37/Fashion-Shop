import React, { Component } from 'react';
import styled from 'styled-components';

class Breadcrumbs extends Component {
    render() {
        const { title } = this.props
        return (
            <BreadcrumbsStyle className="container-fluid text-center breadcrumbs" src={this.props.src}>
                <div className="breadcrumbs-overlay"></div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>{title}</h2>
                    </div>
                </div>
            </BreadcrumbsStyle>
        );
    }
}
const BreadcrumbsStyle = styled.div`
    background: ${props => `url(${props.src})`};
    background-size: cover;
    background-position: center;
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    .breadcrumbs-overlay {
        background-image: linear-gradient(to right, #fff 0%, rgba(255,255,255,0) 100%);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    h2{
        text-transform: uppercase;
    }
`
export default Breadcrumbs;