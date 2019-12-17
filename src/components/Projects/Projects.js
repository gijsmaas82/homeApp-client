import React from 'react'

export default function Projects(props) {
  return (
    <div>
      <div className="projectspage" >
        <div className="projectspage__title" >
          <h1>Projects</h1>
        </div>
        
        <div className="projectspage__left">
          <div className="projectspage__left__header">
            <h2>Menu</h2>
          </div>
          <div className="projectspage__left__menu">
          {props.menuItems.map(item => {
              if (!item.active) {
                return <div className="projectspage__left__menu__item" onClick={props.navigateMenu}>
                  <h3 className={item.name}>{item.name}</h3>
                </div>
              } else {
                return <div className="projectspage__left__menu__item__active">
                  <h3>{item.name}</h3>
                </div>
              }
              
            })}
          </div>
        </div>
        <div className="projectspage__right">
          <div>{props.menuItems.map(item => {
            if (item.active) {
              return <div className="projectspage__right__active">
                <div className="projectspage__right__active__header" > 
                  <h2>{item.name}</h2>
                </div>
                <div className="projectspage__right__active__content">
                  <p>{item.content}</p>
                </div>
              </div>
            } else {
              return
            }
          })}</div>
          
        </div>
        <div className="projectspage__span" >
          
        </div>
      </div>
    </div>
  )
}
