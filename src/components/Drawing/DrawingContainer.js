import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drawing from './Drawing'
import request from 'superagent'
const { url } = require('../../constants')

class DrawingContainer extends Component {
  state = {
    newDrawing: false,
    isPaint: false,
    lines: [],
    newLine: [0, 0],
    drawings: [],
    color: "green",
    saveStage: null,
  }

  onTouchStart = (e) => {
    const stage = e.target.getStage()
    const pos = stage.getPointerPosition()
    
    this.setState({ 
      isPaint: !this.state.isPaint, 
      newLine: [pos.x, pos.y], 
      drawing: [pos.x, pos.y] })
  }
  onTouchMove = (e) => {
    
    if (this.state.isPaint) {
      const stage = e.target.getStage()
      const pos = stage.getPointerPosition()
      const newLine = this.state.newLine.concat([pos.x, pos.y])
      const newLineColored = { line: newLine, color: this.state.color }
      this.setState({ 
        lines: this.state.lines.concat([newLineColored]), 
        newLine: [pos.x, pos.y] 
      })
    }  
  }

  onTouchEnd = (e) => {
    const currentStage = e.target.getStage()
    console.log('stage:', currentStage)
    this.setState({ 
      isPaint: !this.state.isPaint,
      saveStage: currentStage
     })   
  }

  saveStage = () => {
    
    if (this.state.saveStage && this.props.user) {
      const stage = this.state.saveStage
      const drawing = stage.toDataURL()
      request
        .post(`${url}/drawing`)
        .set('Authorization', `Bearer ${this.props.user.jwt}`)
        .send({ URL: drawing })
        .then(response => console.log(response))
        .catch(console.error)
      this.setState({ 
        newDrawing: !this.state.newDrawing, 
        lines: [[0, 0, 0, 0]], 
        drawings: this.state.drawings.concat(drawing) 
      })
    }
    if (this.state.saveStage && !this.props.user) {
      const stage = this.state.saveStage
      const drawing = stage.toDataURL()
      this.setState({ 
        newDrawing: !this.state.newDrawing, 
        lines: [[0, 0, 0, 0]], 
        drawings: this.state.drawings.concat(drawing) 
      })
    }
  }

  newDrawingFn = (e) => {
    this.setState({ newDrawing: !this.state.newDrawing })
  }

  changeColor = (e) => {
    this.setState({ color: e.currentTarget.dataset.color })
  }

  componentDidMount() {
    if (this.props.user) {
      request
        .get(`${url}/drawing`)
        .set('Authorization', `Bearer ${this.props.user.jwt}`)
        .then(response => {
          const savedDrawings = response.body.map(drawing => {
            return drawing.URL
          })
          this.setState({ drawings: savedDrawings })
        })
        .catch(console.error)
    }
  }

  render() {
    
    return (
      <div>
        <Drawing
        isPaint={this.state.isPaint} 
        lines={this.state.lines}
        drawing={this.state.drawing}
        drawings={this.state.drawings}
        color={this.state.color}
        newDrawing={this.state.newDrawing}
        onTouchMove={this.onTouchMove}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onDragStart={this.onDragStart}
        newDrawingFn={this.newDrawingFn}
        changeColor={this.changeColor}
        newLine={this.state.newLine}
        saveStage={this.saveStage}
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

export default connect(mapStateToProps)(DrawingContainer)