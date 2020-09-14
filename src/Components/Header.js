import React, { Component } from 'react';
import ParticlesBg from "particles-bg";

class Header extends Component {
   render() {



      if (this.props.data) {
         var project = this.props.data.project;
         var github = this.props.data.github;
         var name = this.props.data.name;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }
      let config = {
         num: [4, 7],
         rps: 0.1,
         radius: [5, 40],
         life: [1.5, 3],
         v: [2, 3],
         tha: [-40, 40],
         // body: "./img/icon.png", // Whether to render pictures
         // rotate: [0, 20],
         alpha: [0.6, 0],
         scale: [1, 0.1],
         position: "center", // all or center or {x:1,y:1,width:100,height:100}
         color: ["random", "#ff0000"],
         cross: "dead", // cross or bround
         random: 15,  // or null,
         g: 5,    // gravity
         // f: [2, -1], // force
         onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
         }
      };
      return (
         <header className="container"  id="home">
          <div style={{marginTop: "-40em"}}>
            <img src="https://pro2-bar.myportfolio.com/v1/assets/b36fa893-c4e0-489e-b81f-e5e547e4504a/57e5f94e-d50e-4957-b752-bb4ad01c9aa9_rw_1920.jpg?h=9238e90945bdf62b043a2bbb0dd0bce7" />
            
            {/* PASAR DATA A resumeData.json */}
            <div className="title">BONJOUR!</div>
            {/* <div className="title">Federico Marchetta</div> */}
            <div className="description">I'm Federico Marchetta, Frontend Developer. Passionate about design and technology  </div>
            </div>

            <ul className="social" style={{ marginTop: "-31.5em", marginLeft: "-22em", backgroundColor: "black" }}>
               {/* <li>
                  <a href="https://www.facebook.com/federico.marchetta/">
                     <i className="fa fa-facebook"></i>
                  </a>
               </li> */}
               <li>
                  <a href="https://www.linkedin.com/in/federicomarchetta/">
                     <i className="fa fa-linkedin"></i>
                  </a>
               </li>
               {/* <li>
                  <a href="https://www.instagram.com/federico.marchetta/">
                     <i className="fa fa-instagram"></i>
                  </a>
               </li> */}
               <li>
                  <a href="https://stackoverflow.com/users/13444685/federico-531">
                     <i className="fa fa-stack-overflow"></i>
                  </a>
               </li>
               <li>
                  <a href="https://github.com/Federico531">
                     <i className="fa fa-github">
                     </i>
                  </a>
               </li>
            </ul>

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
                  <ul className="social">
                     {/* <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
                     <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a> */}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
