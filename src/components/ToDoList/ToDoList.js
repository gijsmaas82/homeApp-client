import React, { Component } from 'react'

export default class ToDoList extends Component {
  render() {
    return (
      <div> 
        
        {!this.props.todo && 'Loading'}
        {this.props.todo && 
          <div>
            <ul>{this.props.todo.map(todo => {
              return <li>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
              </li>
            })}

            </ul>
          </div>
        }     
      </div>
    )
  }
}