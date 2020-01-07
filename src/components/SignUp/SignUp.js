import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactFileReader from 'react-file-reader'
import LogInContainer from '../LogIn/LogInContainer'


export default class SignUp extends Component {
  render() {
    return (
      <div className="homepage__middle">
        <div className="homepage__middle__intro">
          <div className="homepage__middle__intro__image">
            <img src={this.props.values.avatar} alt="avatar" />
          </div>
          <div className="homepage__middle__intro__site">
            <h2>{this.props.values.name}</h2>
            <p>{this.props.values.description}</p>
          </div>
          {this.props.values.message && 
          <div>
            <div className="homepage__middle__intro__site">
              <p>{this.props.values.message}</p>
            </div>
            <div className="homepage__middle__intro__site">
              <LogInContainer/>
            </div>
          </div>}
        </div>
        {!this.props.values.signedUp &&
        <div>
        <Form onSubmit={this.props.onSubmit} style={{ minWidth: "40vw" }}>
        
          <Form.Group controlId="formBasicText">
            <Form.Label><p>User Name</p></Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" value={this.props.name}
              name='name' onChange={this.props.onChange} required />
              <ReactFileReader handleFiles={this.props.handleFiles} base64={true}>
                <div className='calendarpage__right__addButton'><p>Upload a picture</p></div>
              </ReactFileReader>
              <div><p>{this.props.values.filename}</p></div>
            </Form.Group>
         
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><p>Description</p></Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Description" value={this.props.description}
              name='description' onChange={this.props.onChange}/>
            </Form.Group>
         
            <Form.Group controlId="formBasicEmail">
              <Form.Label><p>Email address</p></Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.props.email}
                name='email' onChange={this.props.onChange} required />
            </Form.Group>
         
            <Form.Group controlId="formBasicPassword">
              <Form.Label><p>Password</p></Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.props.password}
                  name='password' onChange={this.props.onChange} required />
                </Form.Group>
           
            <Button type="submit" className='calendarpage__right__addButton'><p>Submit</p></Button>
          
          </Form>  
        </div>}
      </div>
    )
  }
}
