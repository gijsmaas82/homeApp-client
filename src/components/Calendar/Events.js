import React, { Component } from 'react'
import { CardDeck, Card } from 'react-bootstrap'

export default class Events extends Component {
  render() {
    return (
      <div>
        <h2> Events </h2>
        {this.props.events.length === 0 && <p> there are no events today</p>}
        {this.props.events && 
         <CardDeck style={{ fontFamily:"'Righteous', cursive" }}>
           {this.props.events.map(event => {
            return <Card>
               <Card.Text>{event.title}</Card.Text>
               <Card.Text>{event.date}</Card.Text>
               <Card.Text>{event.startTime}</Card.Text>
               <Card.Text>{event.endTime}</Card.Text>
               <Card.Text>{event.description}</Card.Text>
             </Card>
           })}
         </CardDeck>
        }
      </div>
    )
  }
}
