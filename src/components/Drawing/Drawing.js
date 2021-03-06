import React, { Component } from 'react'
import { Stage, Layer, Line, Path }from'react-konva';


export default class Drawing extends Component {
  render() {
    return (
      <div className="drawingpage">
        {!this.props.newDrawing ?
        <div className="drawingpage__start">
           <div className="drawingpage__start__header">
             <h2>Make your own drawing!</h2>
           </div>
           <div className="drawingpage__start__startbutton" onClick={this.props.newDrawingFn}>
             <div><h3>Start a new Drawing. <br/> Click on the pencil. </h3></div>
             <div><i className="fas fa-pen" /></div>
           </div>
           <div className="drawingpage__start__gallery">
            {this.props.drawings.map(drawing => {
              return <div className="drawingpage__start__gallery__drawing">
                  <img src={drawing} alt="drawing" />
                </div>
            })}
          </div>
          <div className="homepage__span" >
          <div className="homepage__span__info">
            <p>Gijs Maas</p>
            <p>Haarlem</p>
            <p>drs.g.maas@gmail.com</p>
          </div>
          <div className="homepage__span__links">
            <a href="https://github.com/gijsmaas82"><i className="fab fa-github" /></a>
            <a href="https://www.linkedin.com/in/drs-gijs-maas/"><i className="fab fa-linkedin" /></a>
          </div>
        </div>  
        </div>
        :
        <div className="drawingpage__game">
          <div className="drawingpage__game__stage">
          <Stage width={window.innerWidth - 20} height={window.innerHeight - 200} 
          onTouchStart={this.props.onTouchStart} onMouseDown={this.props.onTouchStart}  
          onTouchMove={this.props.onTouchMove} onMouseMove={this.props.onTouchMove}
          onTouchEnd={this.props.onTouchEnd} onMouseUp={this.props.onTouchEnd}
          >
            <Layer> 
              <Path 
                x={this.props.newLine[0]}
                y={this.props.newLine[1]}
                scaleX={0.2}
                scaleY={0.2}
                shadowBlur={5}
                shadowOpacity={0.6}
                data="M330 37L344 100C342 102.333 306.6 144.4 181 294L84  319L2 365L47 280L54 193C58.3333 188.333 94.8 145.4 206   11L285 1M330 37L285 1M330 37L181 223M285 1L130 193"
                fill={this.props.color}
                stroke="black" 
                strokeWidth="8"
              />            
              {this.props.lines.length !== 0 && 
                this.props.lines.map(line => {
                return <Line
                key={line.line}
                stroke={line.color}
                strokeWidth={15}
                globalCompositeOperation="brush"
                points={line.line} /> 
                })
              }
              {this.props.isPaint && <Line 
                stroke={this.props.color}
                strokeWidth={15}
                globalCompositeOperation="brush"
                /> 
                }
            </Layer>
          </Stage>
        </div>
        <div className="drawingpage__game__toolbar">
          <div className="drawingpage__game__toolbar__colors">
              <p>Pick a color</p>
              <div className="drawingpage__game__toolbar__colors__green" data-color="green" onClick={this.props.changeColor}></div>
              <div className="drawingpage__game__toolbar__colors__yellow" data-color="yellow" onClick={this.props.changeColor}></div>
              <div className="drawingpage__game__toolbar__colors__red" data-color="red" onClick={this.props.changeColor}></div>
              <div className="drawingpage__game__toolbar__colors__blue" data-color="blue" onClick={this.props.changeColor}></div>
              <div className="drawingpage__game__toolbar__colors__orange" data-color="orange" onClick={this.props.changeColor}></div>
            </div>
            <div className="drawingpage__game__toolbar__savebutton" onClick={this.props.saveStage}>
              <p>Click on the savebutton to save your drawing.</p>
              <i className="fas fa-save" />
            </div>
          </div>
       
        </div>}
        
      </div>
    )
  }
}



