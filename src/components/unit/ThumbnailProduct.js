import React, { Component } from "react";
import Slider from "react-slick";

export default class ThumbnailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    arrows={false}
                >
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-7.jpg'} height="400" width="100%" alt="thumb-nail" />
                    </div>
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-11.jpg'} height="400" width="100%" alt="thumb-nail" />
                    </div>
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-12.jpg'} height="400" width="100%" alt="thumb-nail" />
                    </div>
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-16.jpg'} height="400" width="100%" alt="thumb-nail" />
                    </div>
                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}
                >
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-7.jpg'} height="120" width="100%" alt="thumb-nail" />
                    </div>
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-11.jpg'} height="120" width="100%" alt="thumb-nail" />
                    </div>
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-12.jpg'} height="120" width="100%" alt="thumb-nail" />
                    </div>
                    <div className="px-1">
                        <img src={process.env.PUBLIC_URL + 'images/item-16.jpg'} height="120" width="100%" alt="thumb-nail" />
                    </div>
                </Slider>
            </div>
        );
    }
}