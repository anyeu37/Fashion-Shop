import React, { Component } from 'react';
import ThumbnailProduct from '../components/unit/ThumbnailProduct';
import Breadcrumbs from '../components/unit/Breadcrumbs';
import styled from 'styled-components';

const ic_starActive = `${process.env.PUBLIC_URL + 'images/ic-starActive.png'}`;
const ic_star = `${process.env.PUBLIC_URL + 'images/ic-star.png'}`;

class ProductsDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumbs title="Chi tiết sản phẩm" src={process.env.PUBLIC_URL + '/images/cover-img-1.jpg'} />
        </div>
        <div className="row py-5">
          <div className="col-md-10 offset-md-1">
            <div className="row py-5">
              <div className="col-md-5">
                <ThumbnailProduct />
              </div>
              <div className="col-md-7">
                <ShortProduct className="description-short ml-5" ic_star={ic_star} ic_starActive={ic_starActive}>
                  <h4 className="text-title">DUMMY PRODUCT NAME</h4>
                  <div className="desc-price d-flex justify-content-between">
                    <div className="price ">
                      200.000 vnd
                      </div>
                    <div className="rating ">
                      <input type="radio" className="start" id="star1" />
                      <label htmlFor="star1"></label>
                      <input type="radio" className="start" id="star2" />
                      <label htmlFor="star2"></label>
                      <input type="radio" className="start" id="star3" />
                      <label htmlFor="star3"></label>
                      <input type="radio" className="start" id="star4" />
                      <label htmlFor="star4"></label>
                      <input type="radio" className="start" id="star5" />
                      <label htmlFor="star5"></label>
                    </div>
                  </div>
                  <div className="desc-short">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quis perspiciatis, ipsa esse. Corporis odio modi, numquam! Iste, quae, aperiam.
                    </p>
                  </div>
                </ShortProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const ShortProduct = styled.div`
  .price {
    font-size: 20px;
    color: var(--secondRed);
    font-weight: 600;
  }
  .rating {
    display: flex;
    transform: rotate(180deg);
    input {
      display:none;
      &:checked ~ label:before {
        z-index: 1;
        opacity: 1;
      }
    }
    label {
      display: block;
      cursor: pointer;
      margin-bottom: 0px;
      &:after{
        position: relative;
        content: url('${(props) => props.ic_star}');
        display: block;
        transform: rotate(105deg);
      }
      &:before {
        position: absolute;
        content: url('${(props) => props.ic_starActive}');
        opacity: 0;
        display: block;
        transition: all 0.5s;
        transform: rotate(105deg);
      }
      &:hover:before{
        opacity: 1;
        z-index: 1;
      }
    }
  }

`
export default ProductsDetail;