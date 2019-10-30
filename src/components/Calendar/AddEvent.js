import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { url } from '../../constants'
import request from 'superagent'

export default class AddEvent extends Component {
  state = {
    addEvent: false,
    wholeDay: true,
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: ''
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
      description: ''
    })
  }

  render() {
    return (
      <div>
        {!this.state.addEvent ? 
      <Button 
      variant="dark" 
      style={{ fontFamily:"'Righteous', cursive" }}
      onClick={this.addEvent}
      >Add Event</Button> 
      :
      <Form style={{ fontFamily:"'Righteous', cursive" }} onSubmit={this.submitEvent} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={this.onChange} name="title" type="text" placeholder="title" value={this.state.title} required />
          <Form.Label>Date</Form.Label>
          <Form.Control onChange={this.onChange} name="date" type="date" placeholder="date" value={this.state.date}required /> 
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Set Time"
              onChange={this.setTime}
            />
          { !this.state.wholeDay && <div><Form.Label>Start time</Form.Label>
          <Form.Control onChange={this.onChange} name="startTime" type="time" placeholder="starttime" value={this.state.startTime} />
          <Form.Label>End time</Form.Label>
          <Form.Control onChange={this.onChange} name="endTime" type="time" placeholder="endtime" value={this.state.endTime} /></div> }
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={this.onChange} name="description" type="textarea" placeholder="description" value={this.state.description} required/>
          <Button variant="dark" type="submit">Submit form</Button>
          <Button variant="dark" onClick={this.addEvent}>Cancel</Button>
        </Form.Group>
      </Form>
      } 
      </div>
    )
  }
}
