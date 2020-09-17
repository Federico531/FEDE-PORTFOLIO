import React, { Component } from 'react';


class Header extends Component {
   render() {



      if (this.props.data) {
         var name = this.props.data.name;
         var description = this.props.data.description;
      }

      return (
         <header className="container" id="home">
            <div className="header" >

                  {/* PASAR DATA A resumeData.json */}
                  <div className="title">BONJOUR!</div>
                  {/* <div className="title">Federico Marchetta</div> */}
                  <div className="description">I'm Federico Marchetta, Frontend Developer. Passionate about design and technology  </div>
                  <div className="socialo">

                     <a href="https://www.linkedin.com/in/federicomarchetta/">
                        <i className="fa fa-linkedin"></i>
                     </a>
                     <a href="https://stackoverflow.com/users/13444685/federico-531">
                        <i className="fa fa-stack-overflow"></i>
                     </a>
                     <a href="https://github.com/Federico531">
                     <i className="fa fa-github"></i>                        
                     </a>

                  </div>
            </div>

            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
               </ul>
            </nav>

            <div className="row banner">

               <div className="banner-text">
                  {/*TODO ESTE BANNER NO APARECE CUANDO SUPLANTO CON UN <img/>*/}
                  <h1 className="responsive-headline">{name}</h1>
                  <h3>{description}.</h3>
                  <hr />
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header >
      );
   }
}

export default Header;
