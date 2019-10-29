import React from 'react'
import { Tabs, Tab, Card, Button, CardDeck, Jumbotron, Image } from 'react-bootstrap'
import './Homepage.css'
import { LinkContainer } from 'react-router-bootstrap'

export default function HomePage() {
  return (
    <div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Gijs Maas">
        <Jumbotron style={{ background:"rgb(23, 27, 43)", 
        backgroundRepeat:"no-repeat", backgroundPosition:"center"}} fluid>
          <CardDeck>
          <Card style={{ fontFamily:"'Righteous', cursive", margin:"1rem", minWidth:"25rem", justifyContent:"center", alignItems:"center" }}>
          <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                <ul>
                  <li>Gijs Maas</li>
                  <li>Proud father</li>
                  <li>Full-stack developer</li>
                  <li>Former teacher</li>
                </ul>
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
        <CardDeck style={{ background:"linear-gradient(to right, #959595 0%,#138e4d 46%,#010101 50%,#a2b512 53%,#4e4e4e 76%,#bf74d3 87%,#1b1b1b 100%)", 
        backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
          <Card style={{ margin:"1rem", minWidth:"25rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ margin:"3rem", minWidth:"25rem", justifyContent:"center", alignItems:"center" }}>
          <Image style={{ maxWidth:"15rem" }} src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" roundedCircle fluid />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ margin:"3rem", minWidth:"25rem"  }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </CardDeck>
        </Tab>
        <Tab eventKey="contact" title="Contact" >
        <CardDeck style={{background:"rgba(116, 152, 250, 0.51)"}}>
          <Card style={{ margin:"3rem", minWidth:"25rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ margin:"3rem", minWidth:"25rem", justifyContent:"center", alignItems:"center" }}>
          <Image style={{ maxWidth:"15rem" }} src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" roundedCircle fluid />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ margin:"3rem",  minWidth:"25rem"  }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </CardDeck>
        </Tab>
      </Tabs>
    </div>
  )
}

