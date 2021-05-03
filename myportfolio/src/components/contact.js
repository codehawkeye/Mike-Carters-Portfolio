import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mike Carter</h2>
            <img
                src={process.env.PUBLIC_URL + "/images/profilepic.jpeg"} 
                alt="Mike Carter"
                style={{height: '300px'}}
                 />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>US. Army Veteran, Full Stack Delveloper</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (602) 488-0985
                  </ListItemContent>
                </ListItem>
               

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  elite.mikecarter@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    linkedin.com/in/carter-mike/
                  </ListItemContent>
                </ListItem>

        

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
