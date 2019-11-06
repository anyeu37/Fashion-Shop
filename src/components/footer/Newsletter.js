import React, { Component } from 'react';
import styled from 'styled-components';

class Newsletter extends Component {
  render() {
    return (
      <React.Fragment>
        <StyleNewsleter className="row">
          <div className="col-md-6">
            <p className="mb-0 text-black text-newsletter">
              <span><i className="far fa-paper-plane pr-3"></i></span>
              Sign Up for a Newsletter
            </p>
          </div>
          <div className="col-md-6">
            <form className="form-inline newsletter-form">
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Enter your  email" />
                <div className="input-group-prepend">
                  <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
              </div>
            </form>

          </div>
        </StyleNewsleter>
      </React.Fragment>
    );
  }
}
const StyleNewsleter = styled.div`
  font-size: 25px;
  .text-newsletter{
    font-weight: 400;
  }
  .newsletter-form {
    .input-group{
      width: 100%;
      input[type="text"] {
        height: 50px; 
        font-size: 14px;
        font-weight: 400;
        border-radius: 50px 0px 0px 50px;
        outline: none;
        border: none;
        box-shadow: none;
        &::placeholder {
          color: var(--mainBlack);
        }
      }
      button[type="submit"]{
        height: 50px;
        border: none;
        background-color: var(--mainBlack);
        border-radius: 0px 50px 50px 0px;
        padding: 0px 25px;
        outline: none;
        box-shadow: none;
        &:hover{
          background-color: var(--mainRed);
        }
      }
    }
  }
`
export default Newsletter;