
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* React Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/QCqj3MLS/Screen-Shot-2021-04-11-at-6-15-21-PM.png) center / cover'}} >Password Generator</CardTitle>
            <CardText>
            This application prompts the user to select preferred criteria to create a unique password.  
            </CardText>
            <CardActions border>
              <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href= 'http://github.com/codehawkeye/password_generator';
              }}>GitHub</Button>
              <Button colored></Button>
              <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href= 'http://codehawkeye.github.io/password_generator/';
              }} colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/630P6437/Screen-Shot-2021-04-11-at-6-16-59-PM.png) center / cover'}} >L over H over</CardTitle>
            <CardText>
            This application shows you the best recipe’s for ingridents you have on hand
            </CardText>
            <CardActions border>
            <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href= 'https://github.com/JRLaro/JJAM';
              }}>GitHub</Button>
              <Button colored></Button>
              <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://jrlaro.github.io/JJAM/';
              }}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/SsHnsdKR/Screen-Shot-2021-04-12-at-2-20-14-PM.png) center / cover'}} >Day planner</CardTitle>
            <CardText>
            Busy Day? This application will save your daily task to keep you organized. 
            </CardText>
            <CardActions border>
            <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href= 'https://github.com/codehawkeye/day_planner';
              }}>GitHub</Button>
              <Button colored></Button>
              <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://codehawkeye.github.io/day_planner/';
              }}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Angular Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/zf7J6jh6/Screen-Shot-2021-04-12-at-1-56-35-PM.png) center / cover'}} >Angular Project</CardTitle>
            <CardText>
            Please check back for updates on my Angular Applications.  
            </CardText>
            <CardActions border>
              <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href= 'https://github.com/codehawkeye';
              }}>GitHub</Button>
              <Button colored></Button>
              <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href= 'https://github.com/codehawkeye';
              }} colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* VUEJS Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/zf7J6jh6/Screen-Shot-2021-04-12-at-1-56-35-PM.png) center / cover'}} >VUEJS Project</CardTitle>
          <CardText>
          Please check back for updates on my VUEJS Applications.  
          </CardText>
          <CardActions border>
            <Button type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href= 'https://github.com/codehawkeye';
            }}>GitHub</Button>
            <Button colored></Button>
            <Button type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href= 'https://github.com/codehawkeye';
            }} colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* MONGODB Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/zf7J6jh6/Screen-Shot-2021-04-12-at-1-56-35-PM.png) center / cover'}} >MONGO_DB Project</CardTitle>
          <CardText>
          Please check back for updates on my MONGO_DB Applications.  
          </CardText>
          <CardActions border>
            <Button type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href= 'https://github.com/codehawkeye';
            }}>GitHub</Button>
            <Button colored></Button>
            <Button type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href= 'https://github.com/codehawkeye';
            }} colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;

