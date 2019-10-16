import React from 'react'
import { getToDo } from '../../actions'
import { connect } from 'react-redux'
import ToDoList from './ToDoList'

class ToDoListContainer extends React.Component {

  pushLogin = () => {
    this.props.history.push('/login')
  }
  render() {
    this.props.getToDo()
      
    return (
      <div>
        <ToDoList todo={this.props.todo} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { todo: state.toDoList, user: state.login }
}

const mapDispatchToProps = { getToDo }

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer)