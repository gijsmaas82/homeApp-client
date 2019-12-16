import React from 'react'
import { Link } from 'react-router-dom'
// import { Tabs, Tab, Card, Button, CardDeck, Jumbotron, Image } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'

export default function HomePage(props) {

  return (
    <div>
      <div className="homepage" >
        <div className="homepage__title" >
          <h1>Portfolio Gijs Maas</h1>
        </div>
        <div className="homepage__left" onMouseEnter={props.openLeft} onMouseLeave={props.closeLeft}>
          <div className="homepage__left__header">
            <h2>Personal info</h2>
          </div>
          <div className="homepage__left__image">
            <img src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" ></img>
          </div>
          {props.leftVisible && <div className="homepage__left__btn" >
            <Link to="/personal">Click to go to personal info</Link>
          </div>}
        </div>
        <div className="homepage__middle" onMouseEnter={props.openMiddle} onMouseLeave={props.closeMiddle}>
        <div className="homepage__middle__header">
            <h2>Projects</h2>
          </div>
          <div className="homepage__middle__image">
            <img src="https://i.ibb.co/RzCb6P8/kisspng-computer-icons-scalable-vector-graphics-favicon-wo-png-save-save-5ab19a06693b12-9290891515215887424311.png" ></img>
          </div>
          {props.middleVisible && <div className="homepage__middle__btn" >
            <Link to="/projects">Click to go to projects</Link>
          </div>}
        </div>
        <div className="homepage__right" onMouseEnter={props.openRight} onMouseLeave={props.closeRight}>
        <div className="homepage__right__header">
            <h2>Interests</h2>
          </div>
          <div className="homepage__right__image">
            <img src="https://i.ibb.co/j3WhdQy/baby-avatar.png" ></img>
          </div>
          {props.rightVisible && <div className="homepage__right__btn" >
            <Link to="/interests">Click to go to interests</Link>
          </div>}
        </div>
        <div className="homepage__span" >
          
        </div>
      </div>
    </div>
  )
}

{/* <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Gijs Maas">
        <Jumbotron style={{ background:"rgb(23, 27, 43)", 
        backgroundRepeat:"no-repeat", backgroundPosition:"center"}} fluid>
          <CardDeck>
          <Card style={{ fontFamily:"'Righteous', cursive", margin:"1rem", minWidth:"25rem", justifyContent:"center", alignItems:"center" }}>
          <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                Gijs Maas <br/> Proud father <br/> Full Stack Developer <br/> Former historyteacher
               
              </Card.Text>
            </Card.Body>
          <Image style={{ maxWidth:"15rem" }} src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" roundedCircle fluid /> 
          </Card>
          <Card style={{ margin:"1rem",  minWidth:"25rem", fontFamily:"'Righteous', cursive" }}>
            <Card.Body>
              <Card.Title>Welcome to my site</Card.Title>
              <Card.Text>
                Please note that this site is under constant construction. Feel free to look around. You can sign up and make customized lists and calendar-events. There is also a games section I am building for my son. It is recommended to play the games section on a tablet. Have fun
              </Card.Text>
            </Card.Body>
          </Card>
         
          <Card style={{ fontFamily:"'Righteous', cursive", margin:"1rem",  minWidth:"25rem"  }}>
            <Card.Body>
              <Card.Title>Links</Card.Title>
              <div>
                <LinkContainer to='calendar' style={{ margin:"2rem"}}>
                  <Button variant="dark"> Calendar</Button>
                </LinkContainer>
                <LinkContainer to='todolist style={{ margin:"2rem"}}'>
                  <Button variant="dark" disabled> To do list</Button>
                </LinkContainer>
                <LinkContainer to='games' style={{ margin:"2rem"}}>
                  <Button variant="dark"> Games</Button>
                </LinkContainer>
              </div>
            </Card.Body>
          </Card>
          </CardDeck>
          </Jumbotron>
        </Tab>
        <Tab eventKey="profile" title="Full-stack Developer">
         <a  href="https://flickr-search-app.netlify.com">Photo search</a>
       
        </Tab>
        <Tab eventKey="contact" title="Contact" >
          <div style={{ width:"40rem", height:"40rem", border:"solid black 10px"}}>A</div>
        </Tab>
      </Tabs> */}