class Accordion extends React.Component {
    render() {
      const { title, expand, onClick } = this.props;
      
      return (
        <div>
          <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
            {title}
          </dt>
          <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
  
              Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
            </p>
          </dd>
        </div>
      );
      
    }
  }
  
  class Application extends React.Component {  
    constructor (props) {
      super(props);
      this.state = {
        block1: true,
        block2: false,
        block3: false,
      };
    }
    
    toggle = (index) => () => {
      this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }
    
    toggleExpand = (expand = false) => () => {
      this.setState({
        block1: expand,
        block2: expand,
        block3: expand,
      });
    }
    
    render() {
      const accordionList = [{ title: 'First Accordion' }, { title: 'Second Accordion' }, { title: 'Third Accordion' }];
      
      return <div className="container">
        <h1>React Accordion</h1>
        <button type="button" className="btn" onClick={this.toggleExpand(true)}>Expand All</button>
        <button type="button" className="btn" onClick={this.toggleExpand()}>Collapse All</button>
        <dl className="accordion">
          {
            accordionList.map((item, index) => (
              <Accordion title={item.title} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} />
            ))
          }
        </dl>
      </div>;
    }
  }
  
  React.render(<Application />, document.getElementById('app'));