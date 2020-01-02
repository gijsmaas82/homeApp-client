import React, { Component } from 'react'
import moment from "moment";
// import "./calendar.css";
import AddEvent from './AddEvent'
import Events from './Events'

export default class Calendar extends Component {

  firstDayOfMonth = () => {
    let firstDay = moment(this.props.dateObject)
      .startOf("month")
      .format("d")
    return firstDay
  }

  dayList = () => {
    let emptyCells = [];
    for (let emptyCell = 0; emptyCell < this.firstDayOfMonth(); emptyCell++) {
      emptyCells.push(<td key={-emptyCell} >{""}</td>);
    }
    let daysInMonth = [];

    for (let day = 1; day <= this.props.dateObject.daysInMonth(); day++) {
      let currentMonth = moment().format("MMMM")
      let currentDay = day === Number(this.props.dateObject.format("D")) && currentMonth === this.props.dateObject.format("MMMM") ? "today" : 'day'
      let clickedDay = day === this.props.selectedDay && this.props.selectedDay !== Number(this.props.dateObject.format("D")) ? 'clickedDay' : ''
      daysInMonth.push(
          <td key={day}  onClick={e => {
            this.props.onDayClick(e, day);
          }}>
            <div className={`${currentDay} ${clickedDay}`}>
              <p>{day}</p>
            </div>
          </td>
        );
    }
    let totalSlots = [...emptyCells, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, cell) => {
      if (cell % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (cell === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    return rows
  }

  monthList = () => {

    let months = moment.months().map(month => {
      return (
        <td
          key={month}
          onClick={e => {
            this.props.setMonth(month);
          }}
        >
          <div className='month'><p>{month}</p></div>
      </td> )
    })
    let rows = []
    let cells = []

    months.forEach((row, month) => {
      if (month % 3 !== 0 || month === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);

    return rows

  };

  render() {
    return (
      <div>
        <div className="calendarpage">
          <div className="calendarpage__title">
            <h1>Calendar</h1>
          </div>
          <div className="calendarpage__left">
           <div className="calendarpage__left__menu"> 
            <div className="calendarpage__left__menu__year">
              <h3>{this.props.dateObject.format("Y")}</h3>
            </div>
            <div className="calendarpage__left__menu__buttons">
              <div><i onClick={this.props.onPrev} className="fas fa-minus"/></div>
              <div><p onClick={this.props.showMonth}>{this.props.dateObject.format("MMMM")}</p></div>
              <div><i onClick={this.props.onNext} className="fas fa-plus"/></div>
            </div>
           </div>
          <div className="calendarpage__left__body" >
            {this.props.showDateTable && (
              <table>
                <thead>
                  <tr>{moment.weekdaysShort().map(day => {
                    return <th key={day}><p>{day}</p></th>;
                      })}</tr>
                </thead>
                <tbody>{this.dayList().map(week => {
                  if (week.length === 0) {
                    return week
                  } else {
                    const key = week[0].key
                    return <tr key={key}>{week}</tr>
                  }
                  })}
                </tbody>
              </table>
            )}
            </div>
            <div>
            {this.props.showMonthTable && (
              <table >
                <thead>
                  <tr>
                    <th colSpan="4"><p>Select a Month</p></th>
                  </tr>
                </thead>
                <tbody>{this.monthList().map(row => {
                  if (row.length === 0) {
                    return row
                  } else {
                    const key = row[0].key
                    return <tr key={key}>{row}</tr>
                  }
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <Events 
            deleteEvent={this.props.deleteEvent}
            deletedEvent={this.props.deletedEvent}
            events={this.props.events}
            deletingEvent={this.props.deletingEvent}
            selectedDay={this.props.selectedDay}
            dateObject={this.props.dateObject}
          />
        <AddEvent />
        <div className="calendarpage__span" >
            <i className="fab fa-github" />
            <i className="fab fa-linkedin" />
        </div>
      </div>
     </div>
    )
  }
}
