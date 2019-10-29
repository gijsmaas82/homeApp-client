import React, { Component } from 'react'
import './Drawing.css'
import { Stage, Layer, Line, Path, Image }from'react-konva';
import useImage from 'use-image';

const BackgroundImage = () => {
  const [image] = useImage('data:image/png;base64,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');
  return <Image 
    x={0}
    y={0}
    width={950}
    height={550}
    image={image} />;
};


export default class Drawing extends Component {
  render() {
    return (
      <div className="drawingWrapper">
        <h1>Drawing</h1>
        {!this.props.newDrawing ? <div className="drawingStage" onClick={this.props.newDrawingFn}>
        <svg width="270" height="348" viewBox="0 0 270 348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 187C18.3333 183.667 39.6 145 130 17L188 5L232 17L266 51V89C187.952 193.732 156.711 237.601 147.649 251.22C146.952 252.593 145.978 254.184 144.679 256C135.213 269.239 108.548 294.458 47.1603 334.96C45.6094 336.261 43.5755 337.608 41 339C11.4 355 4 326.333 4 310L19 187Z" fill="#2F80ED"/>
          <path d="M19 187C18.3333 183.667 39.6 145 130 17L188 5L232 17M19 187L4 310M19 187L108 193M4 310C4 326.333 11.4 355 41 339M4 310C28.6667 313 70.6 323 41 339M41 339C106.778 296.127 134.902 269.673 144.679 256M108 193L149 246C149.354 247.772 148.22 251.048 144.679 256M108 193L232 17M232 17L266 51V89C172.4 214.6 146.119 252.667 144.679 256" stroke="black" strokeWidth="8"/>
        </svg>
        </div> :
        <div className="fixedDrawingStage">
          <div className="colors">
            <div className="green" data-color="green" onClick={this.props.changeColor}></div>
            <div className="yellow" data-color="yellow" onClick={this.props.changeColor}></div>
            <div className="red" data-color="red" onClick={this.props.changeColor}></div>
            <div className="blue" data-color="blue" onClick={this.props.changeColor}></div>
            <div className="orange" data-color="orange" onClick={this.props.changeColor}></div>
          </div>
          <Stage width={1050} height={550} 
          onTouchStart={this.props.onTouchStart} 
          onTouchMove={this.props.onTouchMove}
          onTouchEnd={this.props.onTouchEnd}
          >
            <Layer>
              <BackgroundImage />
              <Path 
                x={0}
                y={0}
                scaleX={0.2}
                scaleY={0.2}
                shadowBlur={5}
                shadowOpacity={0.6}
                
                data="M330 37L344 100C342 102.333 306.6 144.4 181 294L84 319L2 365L47 280L54 193C58.3333 188.333 94.8 145.4 206 11L285 1M330 37L285 1M330 37L181 223M285 1L130 193"
                fill={this.props.color}
                stroke="black" 
                strokeWidth="8"
              />
              <Path 
              onDragStart={this.props.onDragStart} 
              
              x={950}
              y={0}
              width={100}
              height={25}
              draggable
              fill="black"
              data="M12 1H1V71C60.2 69.4 69 70.3333 66 71V17L47 1H37M12 1V17H37V1M12 1H37M22 46H37L22 55H37M12 60H47V37H12V60Z" stroke="#512BBE" stroke-width="2"

              />
              {this.props.lines.map(line => {
                return <Line
                key={line.line}
                stroke={line.color}
                strokeWidth={5}
                globalCompositeOperation="brush"
                points={line.line} /> 
              })} 
              {this.props.isPaint && <Line 
                stroke={this.props.color}
                strokeWidth={5}
                globalCompositeOperation="brush"
                points={this.props.lines[this.props.lines.length - 1]} />}
            </Layer>
          </Stage>
        </div>}
        <div className="drawings">
          {this.props.drawings.map(drawing => {
            return <div className="drawing">
                <img src={drawing} alt="drawing" />
              </div>
          })}
        </div>
      </div>
    )
  }
}



