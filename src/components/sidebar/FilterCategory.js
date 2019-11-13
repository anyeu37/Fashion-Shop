import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class FilterCategory extends Component {
  render() {
    return (
      <WidgetCategory className="widget-category">
        <h3 className="title-widget text-center pt-4">category</h3>
        <ul className="list-group">
          <li className="list-item">
            <Link to=""><i className="fas fa-tshirt"></i>Thời trang nam</Link>
            <ul className="sub-category">
              <li className="list-item">
                <Link to="">dsdsd</Link>
              </li>
              <li className="list-item">
                <Link to="">dsdsd</Link>
              </li>
              <li className="list-item">
                <Link to="">sdsdsd</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <Link to=""><i className="fas fa-umbrella"></i> Thời trang nữ</Link>
          </li>
          <li className="list-item">
            <Link to=""><i className="fas fa-snowboarding"></i> Đồ thể thao</Link>
          </li>
          <li className="list-item">
            <Link to=""><i className="fas fa-umbrella"></i> Quần áo mùa đông</Link>
          </li>
        </ul>
      </WidgetCategory>
    );
  }
}

const WidgetCategory = styled.div`
  border: 1px solid var(--secondWhite);
  background-color: var(--threeWhite);
  .list-group {
    &> .list-item {
      padding: 0px;
      background-color:var(--threeWhite);
      border-top: 1px solid var(--secondWhite);
      text-decoration: none;
      &>a{
        padding: 8px 10px;
        display: block;
        color: var(--mainBlack);
        position: relative;
        &:hover{
          background-color: var(--mainYellow);
          color: var(--mainWhite);
          text-decoration: none;
        }
        &:after {
          position: absolute;
          content: url(${process.env.PUBLIC_URL + 'images/arrow.png'});
          top: 0;
          right: 10px;
          bottom: 0px;
        }
        i {
          padding-right: 10px;
        }
      }
      .sub-category {
        margin:0px;
        padding:0px;
        &> .list-item {
          padding: 0px;
          background-color:var(--threeWhite);
          border-top: 1px solid var(--secondWhite);
          text-decoration: none;
          a {
            padding: 8px 0px 8px 50px;
            display: block;
            color: var(--mainBlack);
            position: relative;
            &:hover {
              background-color: var(--mainYellow);
              color: var(--mainWhite);
              text-decoration: none;
            }
            &:after {
              position: absolute;
              content: url(${process.env.PUBLIC_URL + 'images/arrow-right.png'});
              top: 0;
              left: 30px;
              bottom: 0px;
              transform: translateY(25%);
            }
          }
        }
      }
    }
  }
  
`
export default FilterCategory;