import React, { Component } from 'react'
import DragAndDrop from './DragAndDrop'
import Konva from 'konva';
import { connect } from 'react-redux'
import { getApples } from '../../actions'


class DragAndDropContainer extends Component {
  state = {
    apples: [
      {
        id: 0, 
        isDragging: false,
        dropped: false,
        x: Math.floor(Math.random() * 700),
        y: Math.floor(Math.random() * 400)
      },{
        id: 1, 
        isDragging: false,
        dropped: false,
        x: Math.floor(Math.random() * 700),
        y: Math.floor(Math.random() * 400)
      },{
        id: 2, 
        isDragging: false,
        dropped: false,
        x: Math.floor(Math.random() * 700),
        y: Math.floor(Math.random() * 400)
      },{
        id: 3, 
        isDragging: false,
        dropped: false,
        x: Math.floor(Math.random() * 700),
        y: Math.floor(Math.random() * 400)
      },{
        id: 4, 
        isDragging: false,
        dropped: false,
        x: Math.floor(Math.random() * 700),
        y: Math.floor(Math.random() * 400)
      }],
    basket: {
      x: Math.floor(Math.random() * 700),
      y: 350
      },
    gameOver: false,
    droppedApples: [0]
  }

  componentDidMount() {
    this.props.getApples(this.state.apples)
  }

  onDragStart = (e) => {
    
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.3,
      scaleY: 1.3
    });
    const updatedDragState = this.state.apples.map(apple => {
      
      if (apple.id === Number(e.target.value())) {
        apple.isDragging = !apple.isDragging
        return apple
      }
      return apple 
    })

    this.setState({ apples: updatedDragState })
  }

  onDragEnd = (e) => {
    
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    })
    const updatedDropState = this.state.apples.map(apple => {
      
      if (apple.id === Number(e.target.value())) {
        apple.isDragging = !apple.isDragging
        apple.x = e.target.x()
        apple.y = e.target.y()
        return apple
      }
      return apple 
    })

    this.setState({ apples: updatedDropState })
  }

  onEnded = () => {
    this.props.history.push('/')
  }

  render() {
    
    const droppedApple = this.state.apples.find(apple => {
      return apple.x - this.state.basket.x >= -50 && apple.x - this.state.basket.x <= 50 && apple.y - this.state.basket.y >= -50 && apple.y - this.state.basket.y <= 50
    })
    if (droppedApple) {
      const remainingApples = this.state.apples.filter(apple => apple.id !== droppedApple.id)
      if (remainingApples.length === 0) {
        console.log('game over')
        this.setState({ gameOver: !this.state.gameOver })
      }
      
      this.setState({ apples: remainingApples, droppedApples: this.state.droppedApples.concat(droppedApple.id) })
    }

    return (
      <div>
       
        <DragAndDrop
        position={this.state}
        gameOver={this.state.gameOver}
        droppedApples={this.state.droppedApples}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onEnded={this.onEnded}
         />
        

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    apples: state.apples
  }
}

const mapDispatchToProps = {
  getApples
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropContainer)