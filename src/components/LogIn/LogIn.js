import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <Container>
        <Row>
        <Form onSubmit={this.props.onSubmit} style={{ marginTop: "10vh"}} >
        <Form.Group controlId="formBasicText">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" value={this.props.name}
              name='name' onChange={this.props.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.props.password}
              name='password' onChange={this.props.onChange}/>
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        </Row>
        </Container>

        {/* {this.props.loggedIn ? <h1>You already logged in.</h1>: 
        <div><h2>Login</h2>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Name:
            <input 
            type='text' 
            value={this.props.name} 
            name='name' 
            placeholder='enter your name' 
            onChange={this.props.onChange} 
            />
          </label>
          <label>
            Password:
            <input
            type='password'
            value={this.props.password}
            name='password'
            placeholder='enter password'
            onChange={this.props.onChange}
            />
          </label>
          <button type='submit'>Login</button>
        </form></div>} */}
      </div>
    )
  }
}
