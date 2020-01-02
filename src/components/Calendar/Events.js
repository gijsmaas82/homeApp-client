import React, { Component } from 'react'

export default class Events extends Component {

  render() {

    return (
      <div className="calendarpage__middle">
        <div  className="calendarpage__middle__header">
    <h3> Events of {this.props.selectedDay} {this.props.dateObject.format('MMMM')} {this.props.dateObject.format('Y')}</h3>
        </div>
        {this.props.events.length === 0 && <div className="calendarpage__middle__noEvents"><p>There are no events today</p></div>}
        {this.props.deletingEvent && <div className="calendarpage__middle__deleteEvent">
            <h3> Event Deleted</h3>
            <div className="calendarpage__right__addButton"
             onClick={this.props.deletedEvent}
             ><p>Click to refresh</p>Click to refresh</div>
          </div>}
        {this.props.events.length > 0 && !this.props.deletingEvent &&
         <div className="calendarpage__middle__body">
           {this.props.events.map(event => {
            return <div key={event.id} className="calendarpage__middle__body__event">
               <h3>{event.title}</h3>
               <p>{event.date}</p>
               <p>{event.startTime}</p>
               <p>{event.endTime}</p>
               <p>{event.description}</p>
               <img src={event.picture} alt="eventpicture" />
               <div value={event.id} 
                className="calendarpage__middle__body__event__button" 
                onClick={this.props.deleteEvent}><p>Delete Event</p></div>
             </div>
           })}
         </div>
         
        }
      </div>
    )
  }
}
