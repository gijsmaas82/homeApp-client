import React, { Component } from 'react'
import GameRoom from './GameRoom'
import Konva from 'konva';
import { connect } from 'react-redux'


class GameRoomContainer extends Component {

  state = {
    apple: {
      x: window.innerWidth/5,
      y: window.innerHeight/4
    }, 
    pencil: {
      x: window.innerWidth - window.innerWidth/5,
      y: window.innerHeight/4
    }
  }

  onDragStart = (e) => {
    
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.2,
      scaleY: 1.2,
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
      scaleX: 0.8,
      scaleY: 0.8,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    })
    
    if (e.target.x() - this.state.apple.x >= -200 && e.target.x() - this.state.apple.x <= 200 && e.target.y() - this.state.apple.y >= -200 && e.target.y() - this.state.apple.y <= 200) {
      this.props.history.push('/picking-apples/')
    }

    if (e.target.x() - this.state.pencil.x >= -200 && e.target.x() - this.state.pencil.x <= 200 && e.target.y() - this.state.pencil.y >= -200 && e.target.y() - this.state.pencil.y <= 200) {
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
