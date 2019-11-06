import React, { Component } from "react";
import Slider from "react-slick";

export default class HeaderSlider extends Component {
    render() {
        var settings = {
            accessibility: true,
            adaptiveHeight: true,
            dots: false,
            arrows: true,
            className: 'dkm',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        adaptiveHeight: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        adaptiveHeight: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                    }
                }
            ]
        };
        return (
            <div className="slider">
                <Slider {...settings} style={{ overflow: 'hidden' }}>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/img_bg_1.jpg'} alt="slider" />
                    </div>
                    <div >
                        <img src={process.env.PUBLIC_URL + '/images/img_bg_2.jpg'} alt="slider" />
                    </div>
                </Slider>
            </div>
        );
    }
}