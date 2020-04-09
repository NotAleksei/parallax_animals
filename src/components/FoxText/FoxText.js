import React from 'react';
import './FoxText.css';



function FoxText(props) {
  

  return (
    <div className={props.isPositionLeft ? "FoxText FoxTextActive" : "FoxText"}>
      <div className='textWrapp'>
        <div className='firstText'>
          <span>{props.currentText[3]}</span>
        </div>
        <div className='secondText'>
          <span>{props.currentText[4]}</span>
        </div>
        <div className='thirdText'>
          <span>{props.currentText[5]}</span>
        </div>
      </div>
      <img className='imgFox' src={require('../../img/1.jpg')}></img>
    </div>

  );
}

export default FoxText;
