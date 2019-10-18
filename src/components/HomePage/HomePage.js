import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="page"> 
        <h1>Home Page</h1>
        <Link to="/todolist/" >To Do List</Link>
      </div>
    )
  }
}
