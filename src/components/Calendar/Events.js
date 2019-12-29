import React, { Component } from 'react'

export default class Events extends Component {

  render() {

    return (
      <div className="calendarpage__right">
        <div  className="calendarpage__right__header">
    <h3> Events of {this.props.selectedDay} {this.props.dateObject.format('MMMM')} {this.props.dateObject.format('Y')}</h3>
        </div>
        {this.props.events.length === 0 && <p>There are no events today</p>}
        {this.props.deletingEvent && <div>
            <h3> Event Deleted</h3>
            <button className="btn draw-border"
             onClick={this.props.deletedEvent}
             >Click to refresh</button>
          </div>}
        {this.props.events.length > 0 && !this.props.deletingEvent &&
         <div className="calendarpage__right__body">
           {this.props.events.map(event => {
            return <div key={event.id} className="calendarpage__right__body__event">
               <h3>{event.title}</h3>
               <p>{event.date}</p>
               <p>{event.startTime}</p>
               <p>{event.endTime}</p>
               <p>{event.description}</p>
               <img src={event.picture} alt="eventpicture" />
               <button value={event.id} className="btn draw-border" onClick={this.props.deleteEvent}>Delete Event</button>
             </div>
           })}
         </div>
         
        }
      </div>
    )
  }
}
