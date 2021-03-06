import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
// import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={process.env.PUBLIC_URL + "/images/profilepic.jpeg"} 
                alt="Mike Carter"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: 'em'}}>Mike Carter</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>   Full Stack Developer, I have always had a strong passion for
              web development that begin with classes in c++, and linux/Unix in
              my undergrad. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Orlando FL</p>
            <h5>Phone</h5>
            <p>(602)488-0985</p>
            <h5>Email</h5>
            <p>elite.mikecarter@gmail.com</p>
      
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              // startYear={2020}
              // endYear={2021}
              schoolName="University of Central Florida"
              schoolDescription=" 2021 Coding BootCamp  (Full-Stack Web Development)"
               />

               <Education
              
                 schoolName="University of Phoenix"
                 schoolDescription="Bachelor of Science in Business Marketing"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

           
              <Experience
                startYear={2019}
                endYear={2020}
                jobName="Lockheed Martin"
                jobDescription=" Manufacturing Supervisor : Managed schedule and production of Lockheed Martin products.  "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;