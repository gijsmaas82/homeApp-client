import React from 'react'
import { getToDo } from '../../actions'
import { connect } from 'react-redux'
import ToDoList from './ToDoList'

class ToDoListContainer extends React.Component {
  componentDidMount() {
    this.props.getToDo()
  }

  render() {
    return <ToDoList todo={this.props.todo} />
  }
}

function mapStateToProps (state) {
  return { todo: state.toDoList }
}

const mapDispatchToProps = { getToDo }

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer)