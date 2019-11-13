import React, { Component } from 'react';
import styled from 'styled-components';

class FilterPirce extends Component {
    render() {
        return (
            <WidgetPrice>
                <h4 className="title-widget text-center pt-4">Price</h4>
                <form className="was-validated pt-4">
                    <div className="custom-control custom-checkbox mb-3 text-dark">
                        <input type="checkbox" className="custom-control-input text-dark" id="price1" required />
                        <label className="custom-control-label text-dark" htmlFor="price1">100.000 vnd - 300.000 vnd</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="price2" required />
                        <label className="custom-control-label text-dark" htmlFor="price2">300.000 vnd - 500.000 vnd</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="price3" required />
                        <label className="custom-control-label text-dark" htmlFor="price3">500.000 vnd - 800.000 vnd</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="price4" required />
                        <label className="custom-control-label text-dark" htmlFor="price4">800.000 vnd - 2.000.000 vnd</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="price5" required />
                        <label className="custom-control-label text-dark" htmlFor="price5">Giá khác</label>
                    </div>
                </form>
            </WidgetPrice>
        );
    }
}
const WidgetPrice = styled.div`
    background-color: var(--threeWhite);
    border: 1px solid var(--secondWhite);
    padding-bottom: 10px;
    border-bottom; 1px solid var(--secondWhite);
    form {
        border-top: 1px solid var(--secondWhite);
        padding: 0px 8px;
    }

`
export default FilterPirce;