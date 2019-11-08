import React, { Component } from 'react';
import Breadcrumbs from '../components/unit/Breadcrumbs';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/footer/Newsletter';

class Introducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlock1: true,
      isBlock2: false,
      isBlock3: false,
      introducts: [
        { title: 'Giới thiệu', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aliquam sequi eaque optio, est eligendi nisi dolor exercitationem nostrum alias corrupti. Inventore dignissimos tempora distinctio soluta ducimus eos sapiente itaque dolore iure doloremque dolorem reprehenderit, corporis fuga animi, vero quas, recusandae natus aspernatur odit eveniet. Eum ut ad placeat iste.' },
        { title: 'Lịch sử phát triển', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aliquam sequi eaque optio, est eligendi nisi dolor exercitationem nostrum alias corrupti. Inventore dignissimos tempora distinctio soluta ducimus eos sapiente itaque dolore iure doloremque dolorem reprehenderit, corporis fuga animi, vero quas, recusandae natus aspernatur odit eveniet. Eum ut ad placeat iste.' },
        { title: 'Chương trình ưu đãi', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aliquam sequi eaque optio, est eligendi nisi dolor exercitationem nostrum alias corrupti. Inventore dignissimos tempora distinctio soluta ducimus eos sapiente itaque dolore iure doloremque dolorem reprehenderit, corporis fuga animi, vero quas, recusandae natus aspernatur odit eveniet. Eum ut ad placeat iste.' },
        { title: 'Mục tiêu đặt ra', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aliquam sequi eaque optio, est eligendi nisi dolor exercitationem nostrum alias corrupti. Inventore dignissimos tempora distinctio soluta ducimus eos sapiente itaque dolore iure doloremque dolorem reprehenderit, corporis fuga animi, vero quas, recusandae natus aspernatur odit eveniet. Eum ut ad placeat iste.' },
        { title: 'Danh sách đại lý', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aliquam sequi eaque optio, est eligendi nisi dolor exercitationem nostrum alias corrupti. Inventore dignissimos tempora distinctio soluta ducimus eos sapiente itaque dolore iure doloremque dolorem reprehenderit, corporis fuga animi, vero quas, recusandae natus aspernatur odit eveniet. Eum ut ad placeat iste.' },
      ]
    }
  }
  showAccordion = (index) => {
    this.setState({
      [`isBlock${index}`]: !this.state[`isBlock${index}`]
    });
  }
  render() {
    const { introducts } = this.state;

    const showButton = introducts.map((item, index) => (
      <button
        key={index}
        className="btn btn-link list-group-item list-group-item-primary"
        type="button"
        data-toggle="collapse"
        data-target={`#collapse${index + 1}`}
        aria-expanded="true"
        aria-controls={`#collapse${index + 1}`}
        onClick={() => this.showAccordion(index + 1)}
      >
        {item.title}
      </button>
    ))

    const showContent = introducts.map((item, index) => (
      <div
        key={index}
        id={`collapse${index + 1}`}
        className={this.state[`isBlock${index + 1}`] ? 'collapse show' : 'collapse '}
        aria-labelledby="headingOne"
        data-parent="#accordion">
        <div className="card-body">
          <h4 className="text-title pb-5">{item.title}</h4>
          <p>{item.content}</p>
        </div>
      </div>
    ))
    return (
      <React.Fragment>
        <Breadcrumbs title="Giới thiệu" src={process.env.PUBLIC_URL + '/images/cover-img-1.jpg'} />
        <div className="container py-5">
          <div className="accordion" id="accordionExample">
            <div className="row">
              <div className="col-md-3">
                <ul className="list-group">
                  {showButton}
                </ul>
              </div>
              <div className="col-md-9">
                {showContent}
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Introducts;