import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>

        <div className="about-title">
            <h1 > About Me</h1>
           
        </div>
        <div className="about-section">
            <div className="about-left">
        
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Sudip Dhungana, a passionate computer engineer and frontend developer. With a knack for crafting seamless user experiences, I specialize in turning innovative ideas into reality. Skilled in HTML, CSS, JavaScript, and React.js, I'm dedicated to delivering exceptional results and pushing the boundaries of web development. Let's connect and create something extraordinary together!.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi architecto, nostrum at eligendi quod amet atque maiores praesentium tenetur officiis ipsam soluta tempore consectetur beatae, illo excepturi autem.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">  <p> HTML & CSS </p> <hr style={{width:"80%"}}/>  </div>
                    <div className="about-skill">  <p> React JS </p> <hr style={{width:"50%"}}/>  </div>
                    <div className="about-skill">  <p> JAvascript </p> <hr style={{width:"70%"}}/>  </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
            <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About