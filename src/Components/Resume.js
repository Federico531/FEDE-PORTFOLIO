import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills) => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level, backgroundColor: this.getRandomColor() }} className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>
            {/* HACER UN GRID CON ESTO */}
            <div className="logos">
              <div className="logo1">
                <img src="https://pro2-bar.myportfolio.com/v1/assets/b36fa893-c4e0-489e-b81f-e5e547e4504a/b58765dc-d2df-49f9-8e86-0ab5c5ad83cd_rw_1920.png?h=ddde28d714e391ee2eb8413c938c9ddf" />
                <b className="boldtitle1">BOOTSTRAP 4</b>
                <br />
                <b className="skilltext">I can style my projects much faster thanks to this framework, a tool I always keep in my belt.  </b>
              </div>
              <div>
                <img className="logo2" src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/debd4cf9-737d-4d07-bedd-eebee9e31880_rw_1920.png?h=582c181f88f1446eacd8f89e75b21969" />
                <b className="boldtitle2">GIT</b>
                <br />
                <b className="skilltext">I use Git for all my projects, it gives me freedom to implement new features without risking the versions I prefer. </b>
              </div>
              <div>
                <img className="logo3" src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/403b1ec0-1504-439d-b574-40ce0f5ed2c3_rw_1920.png?h=79dd64f9b8390fbd39cf971a6110a52f" />
                <b className="boldtitle3">HTML 5</b>
                <br />
                <b className="skilltext">Underestimated sometimes but we all know it's a backbone, I get along with HTML and like to use it throught JSX</b>
              </div>
              <div>
                <img className="logo4" src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/59d17801-d78a-4c63-887a-70ba071cec92_rw_1920.png?h=8f827df4949cca3c892c59a9aaa999cf" />
                <b className="boldtitle4">MONGO DB</b>
                <br />
                <b className="skilltext">Combining this Database, Mongoose NPM and Express I can create CRUDS without much hustle all inside JAVASCRIPT. </b>
              </div>
              <div>
                <img className="logo5" src="https://pro2-bar-s3-cdn-cf.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/8137b3da-7b7c-404e-babd-fca9260dba45_rw_1920.png?h=96eadd6fafd03e34bce299cf04f2e5ef" />
                <b className="boldtitle5">NETLIFY</b>
                <br />
                <b className="skilltext">Here I deploy my projects in a convenient way by simply pushing data into my GitHub repositories, works like charm for a cloud server. </b>
              </div>
              <div>
                <img className="logo6" src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/7e13e501-b872-489c-a9e0-7830d321ed0b_rw_1920.png?h=f0446a224e6acc1733e0105d3ec48f6b" />
                <b className="boldtitle6">NODE JS</b>
                <br />
                <b className="skilltext">Node Package Modules are “not reinventing the wheel” at its finest.</b>
              </div>
              <div>
                <img className="logo7" src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/3199ad57-7c6b-4184-9da5-34bc69fa1977_rw_1920.png?h=0f3746b84188105515736ec0f9fa8c67" />
                <b className="boldtitle7">REACT</b>
                <br />
                <b className="skilltext">I use react to organize my code into components and get the advantages of the virtual DOM.</b>
              </div>
              <div>
                <img className="logo8" src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/e97cc8a3-21a3-46d9-a32c-5e7d71a5fbe5_rw_1920.jpg?h=fa53a85f2ef724f63b74abec623ee620" />
                <b className="boldtitle8">JAVASCRIPT</b>
                <br />
                <b className="skilltext">I love figuring out how things work in below the hood. Here is where it all converges </b>
              </div>
              <div>
                <img className="logo9" src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/b36fa893-c4e0-489e-b81f-e5e547e4504a/38a429cc-3233-4662-90a2-6e76fb19a3a6_rw_1920.jpg?h=0ac25148bbb59681bfd7de6a964bf7cf" />
                <b className="boldtitle9">CSS</b>
                <br />
                <b className="skilltext">Internet would be gray without it </b>
              </div>
            </div>
            {/* <div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div> */}
          </div>
        </div>
      </section >
    );
  }
}

export default Resume;
