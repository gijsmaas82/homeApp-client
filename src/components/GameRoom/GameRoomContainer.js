import React, { Component } from 'react'
import GameRoom from './GameRoom'
import Konva from 'konva';
import { connect } from 'react-redux'


class GameRoomContainer extends Component {

  state = {
    apple: {
      x: 100,
      y: 100
    }, 
    pencil: {
      x: 700,
      y: 200
    }
  }

  onDragStart = (e) => {
    
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 0.8,
      scaleY: 0.8,
      rotation: Math.random() * 180
    });

    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseIn,
    })
  }

  onDragEnd = (e) => {

    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 0.5,
      scaleY: 0.5,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    })
    
    if (e.target.x() - this.state.apple.x >= 0 && e.target.x() - this.state.apple.x <= 200 && e.target.y() - this.state.apple.y >= 0 && e.target.y() - this.state.apple.y <= 200) {
      this.props.history.push('/picking-apples/')
    }

    if (e.target.x() - this.state.pencil.x >= 0 && e.target.x() - this.state.pencil.x <= 200 && e.target.y() - this.state.pencil.y >= 0 && e.target.y() - this.state.pencil.y <= 200) {
      this.props.history.push('/drawing/')
    }
  }

  

  render() {
    return (
      <div>
        <GameRoom 
        apple={this.state.apple}
        pencil={this.state.pencil}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
         />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}

export default connect(mapStateToProps)(GameRoomContainer)
