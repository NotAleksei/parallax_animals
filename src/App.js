import React from 'react';
import './App.css';
import Parallax from 'react-springy-parallax'
import FirstBlock from './containers/FirstBlock/FirstBlock';
import SecondBlock from './containers/SecondBlock/SecondBlock';
import Animated from 'animated/lib/targets/react-dom'
import Easing from 'animated/lib/Easing'



class App extends React.Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
  }

   
  render(){
    return (
      <div className="App">
        <Parallax 
          ref={this.myRef} 
          pages={2} 
          effect={(animation, toValue) => Animated.timing(animation, { toValue, duration: 300, easing: Easing.elastic(0) })}
          scrolling={false}>
          <FirstBlock myRef={this.myRef}/>
          <SecondBlock myRef={this.myRef}/>
        </Parallax>
      </div>
    );
  }

}

export default App;
