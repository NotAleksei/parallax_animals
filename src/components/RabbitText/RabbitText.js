import React from 'react';
import './RabbitText.css';



function RabbitText(props) {
  

  return (
    <div className={props.isPositionLeft ? "RabbitText RabbitTextActive" : "RabbitText"}>
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
      <img className='imgRabbit' src={require('../../img/2.jpg')}></img>
    </div>

  );
}

export default RabbitText;
