import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-3">
            <h4 className="title-widget">về chúng tôi</h4>
            <p className="pb-3">Facilis ipsum reprehenderit nemo molestias.
              Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
            </p>
            <p>
              <Link className="px-2" to="/"><i className="fab fa-twitter home-social"></i></Link>
              <Link className="px-2" to="/"><i className="fab fa-facebook-f home-social"></i></Link>
              <Link className="px-2" to="/"><i className="fab fa-google-plus-g home-social"></i></Link>
              <Link className="px-2" to="/"><i className="fab fa-youtube home-social"></i></Link>
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h4 className="title-widget">Chính sách</h4>
                <ul className="list-group">
                  <Link to="/" className="list-item">Cras justo odio</Link >
                  <Link to="/" className="list-item">Dapibus ac facilisis in</Link >
                  <Link to="/" className="list-item">Morbi leo risus</Link >
                  <Link to="/" className="list-item">Porta ac consectetur</Link >
                  <Link to="/" className="list-item">Vestibulum at eros</Link >
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="title-widget">bài viết mới</h4>
                <ul className="list-group">
                  <Link to="/" className="list-item">Cras justo odio</Link >
                  <Link to="/" className="list-item">Dapibus ac facilisis in</Link >
                  <Link to="/" className="list-item">Morbi leo risus</Link >
                  <Link to="/" className="list-item">Porta ac consectetur</Link >
                  <Link to="/" className="list-item">Vestibulum at eros</Link >
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="title-widget">danh mục</h4>
                <ul className="list-group">
                  <Link to="/" className="list-item">Cras justo odio</Link >
                  <Link to="/" className="list-item">Dapibus ac facilisis in</Link >
                  <Link to="/" className="list-item">Morbi leo risus</Link >
                  <Link to="/" className="list-item">Porta ac consectetur </Link >
                  <Link to="/" className="list-item">Vestibulum at eros</Link >
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Thông tin liên hệ</h4>
            <ul className="list-group">
              <Link to="/" className="list-item "><i className="fas fa-map-marker text-danger  pr-1"></i>37 nguyễn chánh-liên chiểu-đà nẵng</Link >
              <Link to="/" className="list-item"><i class="fas fa-phone pr-1 text-success"></i><strong>Phone:</strong> 0868 770 572</Link >
              <Link to="/" className="list-item"><i class="fas fa-envelope pr-1 text-primary"></i><strong>Email:</strong> phanbaan89@gmail.com</Link >
              <Link to="/" className="list-item"><i class="fas fa-globe-asia pr-1 text-danger"></i><strong>Website:</strong> http://webmau247.com</Link >
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;