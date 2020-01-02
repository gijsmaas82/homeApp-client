import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { url } from '../../constants'
import request from 'superagent'
import ReactFileReader from 'react-file-reader'

export default class AddEvent extends Component {
  state = {
    addEvent: false,
    wholeDay: true,
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    picture: '',
    filename: ''
  }

  addEvent = () => {
    this.setState({ addEvent: !this.state.addEvent})
  }
  
  setTime = () => {
    this.setState({ wholeDay: !this.state.wholeDay })
  }

  onChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    }) 
    
  }

  handleFiles = files => {
    this.setState({
      picture: files.base64,
      filename: files.fileList[0].name
    })
  }

  submitEvent = (e) => {
    e.preventDefault()
    request.post(`${url}/event`)
      .send(this.state)
      .then(response => {
        console.log(response)})
      .catch(console.error)
    this.setState({
      addEvent: false,
      wholeDay: true,
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
      picture: ''
    })
  }

  render() {
    return (
      <div className="calendarpage__right">
        {!this.state.addEvent ? 
      <div 
      className="calendarpage__right__addButton"
      onClick={this.addEvent}
      ><p>Add Event</p></div> 
      :
      <div><Form style={{ fontFamily:"'Righteous', cursive", margin: '2rem' }} onSubmit={this.submitEvent} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label><p>Title of Event</p></Form.Label>
          <Form.Control onChange={this.onChange} name="title" type="text" placeholder="title" value={this.state.title} required />
          <Form.Label><p>Date</p></Form.Label>
          <Form.Control onChange={this.onChange} name="date" type="date" placeholder="date" value={this.state.date}required /> 
          <ReactFileReader handleFiles={this.handleFiles} base64={true}>
            <div className='calendarpage__right__addButton'><p>Upload a picture</p></div>
          </ReactFileReader>
          {!this.state.filename ? '' : <div><p>{this.state.filename}</p></div>}
          <p>Set Time</p>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Add times to the event"
            onChange={this.setTime}
          />
          { !this.state.wholeDay && <div><Form.Label><p>Start time</p></Form.Label>
          <Form.Control onChange={this.onChange} name="startTime" type="time" placeholder="starttime" value={this.state.startTime} />
          <Form.Label><p>End time</p></Form.Label>
          <Form.Control onChange={this.onChange} name="endTime" type="time" placeholder="endtime" value={this.state.endTime} /></div> }
          <Form.Label><p>Description</p></Form.Label>
          <Form.Control onChange={this.onChange} name="description" type="textarea" placeholder="description" value={this.state.description} required/>
          <div 
            className="calendarpage__right__addButton"
            onClick={this.submitEvent}
            ><p>Add Event</p></div>
          <div 
            className="calendarpage__right__addButton"
            onClick={this.addEvent}
            ><p>Cancel</p></div>
        </Form.Group>
      </Form>
      </div>
      } 
      </div>
    )
  }
}
