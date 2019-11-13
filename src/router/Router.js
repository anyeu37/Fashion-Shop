import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Introducts from '../containers/Introducts';
import Products from '../containers/Products';
import Contact from '../containers/Contact';
import NotFound from '../containers/NotFound';
import News from '../containers/News';
import ProductsDetail from '../containers/ProductsDetail';

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/introduct">
                        <Introducts />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/product-detail">
                        <ProductsDetail />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Router;