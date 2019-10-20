import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Container>
        <Row>
        <Form onSubmit={this.props.onSubmit}>
        <Col>
        <Form.Group controlId="formBasicText">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" value={this.props.name}
              name='name' onChange={this.props.onChange}/>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.props.email}
              name='email' onChange={this.props.onChange}/>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.props.password}
              name='password' onChange={this.props.onChange}/>
          </Form.Group>
          </Col>
          <Col>
          <Button variant="dark" type="submit">
            Submit
          </Button>
          </Col>
        </Form>
        </Row>
        </Container>

        {/* <form onSubmit={this.props.onSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.props.name}
              name='name'
              placeholder='enter your name'
              onChange={this.props.onChange}
            />
          </label>
          <label>
            password:
            <input
              type='password'
              value={this.props.password}
              name='password'
              placeholder='enter password'
              onChange={this.props.onChange}
            />
          </label>
          <button type='submit'>Sign up</button>
        </form> */}
      </div>
    )
  }
}
