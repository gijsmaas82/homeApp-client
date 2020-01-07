import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap'

export default class LogIn extends Component {
  render() {
    return (
      <div >
        <Form onSubmit={this.props.onSubmit} style={{ minWidth: "40vw" }} >
        <Col>
          <Form.Group controlId="formBasicText">
            <Form.Label><p>User Name</p></Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" value={this.props.name}
              name='name' onChange={this.props.onChange}/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicPassword">
            <Form.Label><p>Password</p></Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.props.password}
              name='password' onChange={this.props.onChange}/>
          </Form.Group>
          </Col>
          <Col>
            <Button type="submit" className='calendarpage__right__addButton'><p>Log in</p></Button>
          </Col>
        </Form>
      </div>
    )
  }
}
