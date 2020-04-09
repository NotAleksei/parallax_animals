import React from 'react';
import './MainPage.css';




function MainPage(props) {
 
    return (
      <div className="MainPage" onClick={()=> props.myRef.current.scrollTo(1)}>
    
      </div>
    );
}

export default MainPage;
