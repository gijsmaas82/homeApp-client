import React, { Component } from 'react'
import { Table, Jumbotron, Button, CardDeck, Card, Badge } from 'react-bootstrap'
import moment from "moment";
import "./calendar.css";

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
    
      daysInMonth.push(
          <td key={day}  onClick={e => {
            this.props.onDayClick(e, day);
          }}>
            <div className={`${currentDay}`}>
              {day}
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
          <div className='month'>{month}</div>
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
        <div style={{display:"flex", flexDirection:"column", fontFamily:"'Righteous', cursive" }}>
         <div style={{ margin:"10px", width:"100%", display:"flex", justifyContent:"space-around", alignItems:"center", fontFamily:"'Righteous', cursive"}}> 
           <h4 onClick={this.props.showMonth}>{this.props.dateObject.format("MMMM")}</h4>
           <h4>{this.props.dateObject.format("Y")}</h4>
           <Button variant="dark" onClick={this.props.onPrev} >-</Button>
           <Button variant="dark" onClick={this.props.onNext}>+</Button>
         </div>        
       
        <div>
          {this.props.showDateTable && (
            
              <Table>
                <thead>
                  <tr>{moment.weekdaysShort().map(day => {
                    return <th key={day}>{day}</th>;
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
              </Table>
          )}
          </div>
          <div>
          {this.props.showMonthTable && (
            <Table >
              <thead>
                <tr>
                  <th colSpan="4">Select a Month</th>
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
            </Table>
          )}
        </div>
      </div>
     </div>
    )
  }
}
