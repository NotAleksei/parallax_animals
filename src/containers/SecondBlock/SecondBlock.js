import React from 'react';
import './SecondBlock.css';
import Rabbit from '../../components/Rabbit/Rabbit';
import RabbitMenu from '../../components/RabbitMenu/RabbitMenu';
import RabbitText from '../../components/RabbitText/RabbitText';

class SecondBlock extends React.Component {
  state = {
    currentMenu: 0,
    menuParam: [['textMenu','#sector1', 'ЧТО КУШАЮТ', 'ЛЮБЯТ', 'РАЗНЫЕ', 'ВКУСНЯШКИ'],
    ['textMenu','#sector2', 'ГДЕ ОБИТАЮТ', 'ЖИВУТ', 'В УЮТНЫХ', 'НОРКАХ'],
    ['textMenu','#sector3', 'КАКИЕ БЫВАЮТ', 'МИЛЫЕ', 'ПУШИСТЫЕ', 'СЕРЫЕ'],
    ['textMenu','#sector4', 'КАК ЖИВУТ', 'ДЕЛАЮТ', 'ФЫР-ФЫР', 'В НОРКАХ']],
    wheel: 0,
    positionLeft: false,
  }

  toggleMenu = (e) => {
    if(this.state.wheel%200 === 0) {
      let currentMenu;
      if(this.state.currentMenu === 3 && e.deltaY>0) {
        currentMenu = 0;
      } else if(this.state.currentMenu === 0 && e.deltaY<0) {
        currentMenu = 3;
      } else {
         if(e.deltaY>100||e.deltaY<-100){
          currentMenu = this.state.currentMenu + Math.sign(e.deltaY) * e.deltaY/e.deltaY;
         } else{
          currentMenu = this.state.currentMenu + e.deltaY/100;
        }

      };
      const menuParam = this.state.menuParam;
        menuParam[currentMenu][0] = 'textMenu textMenuActive';
        menuParam[this.state.currentMenu][0] = 'textMenu'
      const wheel = this.state.wheel + e.deltaY
      this.setState({
        currentMenu: currentMenu,
        menuParam:menuParam,
        wheel: wheel
      })
      
      if(!this.state.positionLeft){this.setState({
          positionLeft: true,
        })
      }

    } else {
      const wheel = this.state.wheel + e.deltaY
      this.setState({
        wheel: wheel
      })
    }

  }

  nextPage = () => {
    this.props.myRef.current.scrollTo(0)
    const menuParam = this.state.menuParam;
    menuParam.forEach(item => item[0]='textMenu')
    this.setState({
      currentMenu: 0,
      menuParam: menuParam,
      wheel: 0,
      positionLeft: false,
    })
  }

  render(){
    return (
      <div className="SecondBlock" onWheel ={(e)=>this.toggleMenu(e)}>
        <RabbitMenu menuParam = {this.state.menuParam} isPositionLeft={this.state.positionLeft}/>
        <Rabbit isPositionLeft={this.state.positionLeft}/>
        <RabbitText isPositionLeft={this.state.positionLeft} currentText={this.state.menuParam[this.state.currentMenu]}/>

        <div className='nextPageRabbit' onClick={this.nextPage}>
          <svg className ='topArrow' width="30" height="20">
            <path stroke="black" stroke-width="3"
                  d="M 15,18 L 2,2
                    M 15,18 L 28,2"/>
          </svg>
          <svg width="30" height="20">
            <path stroke="black" stroke-width="3"
                  d="M 15,18 L 2,2
                    M 15,18 L 28,2"/>
          </svg>
        </div>       
      </div>
    );
  }
}

export default SecondBlock;
