import React, { Component } from 'react';
import Breadcrumbs from '../components/unit/Breadcrumbs';
import Product from '../components/products/Product';
import FilterCategory from '../components/sidebar/FilterCategory';
import Footer from '../components/footer/Footer';
import FilterColor from '../components/sidebar/FilterColor';
import FilterSize from '../components/sidebar/FillterSize';
import FilterPirce from '../components/sidebar/FilterPrice';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs title="sản phẩm" src={process.env.PUBLIC_URL + '/images/cover-img-1.jpg'} />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <FilterCategory />
                            <div className="py-5"></div>
                            <FilterColor />
                            <div className="py-5"></div>
                            <FilterSize />
                            <div className="py-5"></div>
                            <FilterPirce />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-16.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-15.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-14.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-13.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-12.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-11.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-10.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-9.jpg'} />
                                </div>
                                <div className="col-md-4">
                                    <Product src={process.env.PUBLIC_URL + 'images/item-8.jpg'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Products;