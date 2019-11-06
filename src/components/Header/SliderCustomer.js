import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

export default class SliderCustomer extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            arrow: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="item">
                        <InfoCustomer className="text-center" src={this.props.src[0]}>
                            <div className="info-image"></div>
                            <div className="info-desc">
                                <h4 className="info-name">Phan Ba An</h4>
                                <p className="info-role">Khach hang</p>
                            </div>
                        </InfoCustomer>
                        <blockquote className="text-desc font-italic text-center">
                            Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </blockquote>
                    </div>
                    <div className="item">
                        <InfoCustomer className="text-center" src={this.props.src[1]}>
                            <div className="info-image"></div>
                            <div className="info-desc">
                                <h4 className="info-name">Nguyen minh son</h4>
                                <p className="info-role">Khach hang</p>
                            </div>
                        </InfoCustomer>
                        <blockquote className="text-desc font-italic text-center">
                            Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </blockquote>
                    </div>
                    <div className="item">
                        <InfoCustomer className="text-center" src={this.props.src[2]}>
                            <div className="info-image"></div>
                            <div className="info-desc">
                                <h4 className="info-name">Do van tu</h4>
                                <p className="info-role">Khach hang</p>
                            </div>
                        </InfoCustomer>
                        <blockquote className="text-desc font-italic text-center">
                            Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </blockquote>
                    </div>
                </Slider>
            </div>
        );
    }
}
const InfoCustomer = styled.div`
.info-image {
    background-image: ${props => `url(${props.src})`};
    background-size: cover;
    background-position: center;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    margin: 0 auto;
}
.info-desc{
    padding: 10px 0px;
}

`