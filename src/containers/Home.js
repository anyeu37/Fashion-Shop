import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderSlider from '../components/Header/Slider';
import Categories from '../components/products/Categories';
import TitleHeading from '../components/unit/TitleHeading';
import Product from '../components/products/Product';
import Button from '../components/unit/Button';
import SliderCustomer from '../components/Header/SliderCustomer';
import News from '../components/blog/News';
import Newsletter from '../components/footer/Newsletter';
import Footer from '../components/footer/Footer';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderSlider />
                <Categories />
                <section className="ArrivalHeading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <TitleHeading title="NEW ARRIVAL" description="We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="home-arrival" className="pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-5.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-6.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-7.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-8.jpg'} />
                            </div>
                        </div>
                    </div>
                </section>
                <ParallaxSection>
                    <div className="parallax-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="parallax-desc">
                                    <div className="parallax-left">
                                        <div className="text-sales">
                                            <h4 className="sale-number">45</h4>
                                            <span className="sale-percent">%</span>
                                            <span className="sale-off">off</span>
                                            <h4 className="sale-text">sale</h4>
                                        </div>
                                    </div>
                                    <div className="parallax-right ">
                                        <h5 className="parallax-title pb-2">Just hurry up limited offer!</h5>
                                        <p className="text-desc pb-2">
                                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                            </p>
                                        <p>
                                            <Button primary className="mr-3">Shop Now</Button>
                                            <Button>Read More</Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
                <section className="ProductsHeading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <TitleHeading title="OUR PRODUCTS" description="We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="home-arrival" className="pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-9.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-10.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-11.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-12.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-13.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-14.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-15.jpg'} />
                            </div>
                            <div className="col-md-3">
                                <Product src={process.env.PUBLIC_URL + 'images/item-16.jpg'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="home-customer" className="customer" style={{ backgroundColor: `var(--threeWhite)` }}>
                    <div className="customer-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <TitleHeading title="OUR SATISFIED CUSTOMER SAYS" />
                            </div>
                            <div className="col-md-8 offset-md-2">
                                <SliderCustomer src={[process.env.PUBLIC_URL + 'images/item-14.jpg', process.env.PUBLIC_URL + 'images/item-15.jpg', process.env.PUBLIC_URL + 'images/item-16.jpg']} />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="home-news" className="news">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <TitleHeading title="RECENT BLOG" description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <News src={process.env.PUBLIC_URL + '/images/blog-1.jpg'} />
                            </div>
                            <div className="col-md-4">
                                <News src={process.env.PUBLIC_URL + '/images/blog-2.jpg'} />
                            </div>
                            <div className="col-md-4">
                                <News src={process.env.PUBLIC_URL + '/images/blog-3.jpg'} />
                            </div>
                        </div>
                    </div>
                </section>
                <Newsletter />
                <Footer />
            </React.Fragment>
        );
    }
}
const ParallaxSection = styled.section`
    background-image: url(${process.env.PUBLIC_URL + 'images/cover-img-1.jpg'});
    background-position: 50% -14px;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    padding: 100px 0px;
    .parallax-overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;   
        background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
    }
    .parallax-desc {
        display: table;
        .parallax-left{
            display: table-cell;
            position: relative;
            .sale-number {
                font-size: 90px;
                font-weight:700;
                color: var(--mainYellow);
                line-height: 0.7;
            }
            .sale-percent {
                position: absolute;
                top: -10px;
                left: 58%;
                color: var(--mainYellow);
                font-size: 40px;
                font-weight: 700;
            }
            .sale-off {
                position: absolute;
                top: 20%;
                left: 60%;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 30px;
            }
            .sale-text {
                font-size: 72px;
                font-weight:700;
                color: var(--mainDark);
                text-transform: uppercase;
            }
        }
        .parallax-right {
            display: table-cell;
            padding: 0px 0px 0px 30px;
            position: absolute;
            .parallax-title {
            }
        }
    }
    }
`
export default Home;