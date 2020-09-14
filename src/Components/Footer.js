import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
            <ul className="copyright" style={{color:"white"}}>
              <li>&copy; Federico Marchetta 2020</li>
              <li>Design by <a style= {{color:"white"}}title="Styleshout" href="https://watashidesign.netlify.app/">Natalia Muñiz</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
