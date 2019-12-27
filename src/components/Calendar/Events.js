import React, { Component } from 'react'
import { CardDeck, Card, Button } from 'react-bootstrap'

export default class Events extends Component {

  render() {

    return (
      <div style={{ fontFamily:"'Righteous', cursive" }}>
        <h2> Events </h2>
        {this.props.events.length === 0 && <p> there are no events today</p>}
        {this.props.deletingEvent && <div>
            <h2> Event Deleted</h2>
            <Button variant="dark"
             onClick={this.props.deletedEvent}
             >Click to refresh</Button>
          </div>}
        {this.props.events.length > 0 && !this.props.deletingEvent &&
         <CardDeck style={{ fontFamily:"'Righteous', cursive" }}>
           {this.props.events.map(event => {
            return <Card>
               <Card.Text>{event.title}</Card.Text>
               <Card.Text>{event.date}</Card.Text>
               <Card.Text>{event.startTime}</Card.Text>
               <Card.Text>{event.endTime}</Card.Text>
               <Card.Text>{event.description}</Card.Text>
               <Card.Img src={event.picture} alt="eventpicture" />
               <Button value={event.id} variant="dark" onClick={this.props.deleteEvent}>Delete Event</Button>
             </Card>
           })}
         </CardDeck>
         
        }
      </div>
    )
  }
}
