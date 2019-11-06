import React, { Component } from 'react';
import Categorie from './Categorie';
import styled from 'styled-components';

class Categories extends Component {
    render() {
        return (
            <CategoriesSection className="categories pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box-category category-left">
                                <Categorie src={process.env.PUBLIC_URL + 'images/item-1.jpg'} />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="category-right">
                                        <Categorie src={process.env.PUBLIC_URL + 'images/item-2.jpg'} />
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="category-right">
                                        <Categorie src={process.env.PUBLIC_URL + 'images/item-3.jpg'} />
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="category-right">
                                        <Categorie src={process.env.PUBLIC_URL + 'images/item-4.jpg'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CategoriesSection>
        );
    }
}
const CategoriesSection = styled.section`
    padding-top: 100px !important;
    .box-category {
        overflow: hidden;
        height: 500px;
        margin-bottom: 30px;
    }
    .category-right {
        height: 235px;
        margin-bottom: 30px;
        overflow: hidden;
    }
`
export default Categories;