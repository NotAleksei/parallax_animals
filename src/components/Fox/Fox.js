import React from 'react';
import Parallax from 'react-springy-parallax'
import './Fox.css';





function Fox(props) {
  return (
      <div className = {props.isPositionLeft ? "fox foxleft" : "fox"}>
        <Parallax.Layer className='leftEar' 
                      offset={0}
                      speed={-0.5}>
          <svg width="40" height="40">
            <polygon  points="5,40 0,0 40,20"
                      fill="#ff9c8b"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer  className='rightEar'                 
                          offset={0}
                          speed={-0.36}>
          <svg width="40" height="40">
            <polygon  points="0,20 40,0 35,40"
                      fill="tomato"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='leftFace' 
                        offset={0}
                        speed={0.46}>
          <svg width="40" height="80">
            <polygon  points="5,40 40,20 40,80"
                      fill="tomato"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rightFace'                 
                        offset={0}
                        speed={-0.25}>
          <svg width="40" height="80">
            <polygon  points="0,20 35,40 0,80"
                      fill="#fc745c"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='leftNeck'                 
                        offset={0}
                        speed={0.4}>
          <svg width="30" height="120">
            <polygon  points="5,0 30,0 30,120"
                      fill="#f7f7f7"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rightNeck'                 
                        offset={0}
                        speed={0.3}>
          <svg width="30" height="120">
            <polygon  points="0,0 30,0 0,120"
                      fill="white"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='body'                 
                        offset={0}
                        speed={0.8}>
          <svg width="80" height="110">
            <polygon  points="0,110 25,10 80,60"
                      fill="tomato"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='leg'                 
                        offset={0}
                        speed={-0.3}>
          <svg width="80" height="110">
            <polygon  points="0,110 10,100 80,60 70,110"
                      fill="#fc6a50"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='tail'                 
                        offset={0}
                        speed={0.08}>
          <svg width="40" height="100">
            <polygon  points="10,100 0,20 25,0 40,15"
                      fill="#fc745c"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='endTail'                 
                        offset={0}
                        speed={0.8}>
          <svg width="20" height="40">
            <polygon  points="0,20 15,7 15,35"
                      fill="white"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='nose'                 
                        offset={0}
                        speed={0.3}>
          <svg width="6" height="6">
            <circle r="3" cx="3" cy="3" fill="black"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='leftEye'                 
                        offset={0}
                        speed={-0.26}>
          <svg width="4" height="4">
            <circle r="2" cx="2" cy="2" fill="black"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rightEye'                 
                        offset={0}
                        speed={0.3}>
          <svg width="4" height="4">
            <circle r="2" cx="2" cy="2" fill="black"/>
          </svg>
        </Parallax.Layer>
      </div>
  );
}

export default Fox;
