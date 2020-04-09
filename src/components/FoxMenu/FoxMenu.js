import React from 'react';
import './FoxMenu.css';



function FoxMenu(props) {
  
  let menuParam = props.menuParam ? props.menuParam.map((item)=>{
    return (
      <text className = {item[0]} font-size="30" text-anchor='middle' fontFamily= 'Roboto, sans-serif'>
        <textPath xlinkHref={item[1]}  startOffset ='50%'>
          {item[2]}
        </textPath>
      </text>
    )
  }):null

  return (
    <div className={props.isPositionLeft ? "FoxMenu FoxMenuleft" : "FoxMenu"}>
      <svg className='svg1' viewBox="0 0 400 400" width="400" height="400">
        <path id = 'sector1' d="M 20,200 A180,180 0 0, 1 200,20" fill='transparent'/>
        <path id = 'sector2' d="M 200,20 A180,180 0 0, 1380,200" fill='transparent'/>
        <path id = 'sector3' d="M 380,200 A180,180 0 0, 1 200,380" fill='transparent'/>
        <path id = 'sector4' d="M 200,380 A180,180 0 0, 1 20,200" fill='transparent'/>
        {menuParam}
      </svg>
    </div>

  );
}

export default FoxMenu;
