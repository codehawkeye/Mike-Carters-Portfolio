import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
          <img
                src={process.env.PUBLIC_URL + "/images/profilepic.jpeg"} 
                alt="Mike Carter"
                style={{height: '300px'}}
                 />
          </div>
          <h2 style={{ paddingTop: "" }}>Mike Carter</h2>
          <h4 style={{ color: "grey" }}>Web Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            {" "}
            Junior full stack web developer able to contribute to all phases of an application. Earned a Certificate in Full Stack Web Development from University of Central Florida. 3 plus years of leadership and product lifecycle management. 
.{" "}
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>Orlando, FL </p>
          <h5>Phone</h5>
          <p>(602)488-0985</p>
          <h5>Email</h5>
          <p>elite.mikecarter@gmail.com</p>

          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>About Me</h2>

          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h4>   I'm a former defense contractor who has always had a passion for web design. I have experience with server-side development,
            front-end frameworks, and various javascript libraries: React, Node.js, jQuery, MySQL, and MongoDB.
          </h4>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default About;

         