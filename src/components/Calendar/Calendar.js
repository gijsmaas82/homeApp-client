import React, { Component } from 'react'
import moment from "moment";
// import "./calendar.css";
import AddEvent from './AddEvent'
import Events from './Events'
import { Table } from 'react-bootstrap'

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
          {this.props.showPictures &&
          <div className="photoapp__save">
              <div className="photoapp__save__prompt">
                <h2>Click on image?</h2>
                {this.props.favoritePhotos && 
                  <div className="photoapp__save__prompt__gallery">
                    {this.props.favoritePhotos.map(item => {
                      return <div
                              onClick={this.props.useFavoritePhoto}
                              data-picture={item.picture} 
                              className="photoapp__save__prompt__gallery__item" >
                          <img src={item.picture} alt="pic" />
                        </div>
                    })}
                  </div>
                }
                {/* <img src={this.props.url} alt="savedImage" />
                <div className="photoapp__save__prompt__buttons">
                  <div onClick={this.props.cancelSave} className="photoapp__save__prompt__buttons__button"><p>Cancel</p></div>
                  <div onClick={this.props.savePicture} className="photoapp__save__prompt__buttons__button"><p>Save Photo</p></div>
                </div> */}
              </div>
          </div>}
          <div className="calendarpage__title">
            <h1>Calendar</h1>
          </div>
          <div className="calendarpage__left">
           <div className="calendarpage__left__menu"> 
            <div className="calendarpage__left__menu__year">
              <h2>{this.props.dateObject.format("Y")}</h2>
            </div>
            <div className="calendarpage__left__menu__buttons">
              <div><i onClick={this.props.onPrev} className="fas fa-minus"/></div>
              <div><p onClick={this.props.showMonth}>{this.props.dateObject.format("MMMM")}</p></div>
              <div><i onClick={this.props.onNext} className="fas fa-plus"/></div>
            </div>
           </div>
          <div className="calendarpage__left__body" >
            {this.props.showDateTable && (
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>{moment.weekdaysShort().map(day => {
                    return <th key={day}><p>{day}</p></th>;
                      })}</tr>
                </thead>
                <tbody >{this.dayList().map(week => {
                  if (week.length === 0) {
                    return week
                  } else {
                    const key = week[0].key
                    return <tr key={key}>{week}</tr>
                  }
                  })}
                </tbody>
              </Table>
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
        {!this.props.user ? 
        ''
        :
        <Events 
            deleteEvent={this.props.deleteEvent}
            deletedEvent={this.props.deletedEvent}
            events={this.props.events}
            deletingEvent={this.props.deletingEvent}
            selectedDay={this.props.selectedDay}
            dateObject={this.props.dateObject}
          />
        }
        <AddEvent 
          user={this.props.user}
          login={this.props.login}
          showEvents={this.props.showEvents}
          promptPictures={this.props.promptPictures}
          picture={this.props.picture}
          />
        <div className="homepage__span" >
          <div className="homepage__span__info">
            <p>Gijs Maas</p>
            <p>Haarlem</p>
            <p>drs.g.maas@gmail.com</p>
          </div>
          <div className="homepage__span__links">
            <a href="https://github.com/gijsmaas82"><i className="fab fa-github" /></a>
            <a href="https://www.linkedin.com/in/drs-gijs-maas/"><i className="fab fa-linkedin" /></a>
          </div>
        </div>  
      </div>
     </div>
    )
  }
}
