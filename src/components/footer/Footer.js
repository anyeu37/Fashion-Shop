import React, { Component } from 'react';
import FooterTop from './FooterTop';
import Copyright from './Copyright';

class Footer extends Component {
    render() {
        return (
            <section id="footer" className="footer pt-5" >
                <FooterTop />
                <Copyright />
            </section>
        );
    }
}

export default Footer;