import React from 'react';
import Parallax from 'react-springy-parallax'
import './Rabbit.css';





function Rabbit(props) {
  return (
      <div className = {props.isPositionLeft ? "rabbit rabbitleft" : "rabbit"}>
        <Parallax.Layer className='rabbitEar1' 
                      offset={0.1}
                      speed={0.1}>
          <svg width="220" height="220">
            <polygon  points="19,64 60,84 55,60"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitEar2' 
                      offset={0.4}
                      speed={0.4}>
          <svg width="220" height="220">
            <polygon  points="55,60 80,50 60,84"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitEar3' 
                      offset={0.1}
                      speed={0.1}>
          <svg width="220" height="220">
            <polygon  points="55,60 65,10 80,50"
                      fill="#b98c66"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitEar4' 
                      offset={-0.5}
                      speed={-0.25}>
          <svg width="220" height="220">
            <polygon  points="65,10 80,50 85,40 85,5"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitEar5' 
                      offset={0.4}
                      speed={0.4}>
          <svg width="220" height="220">
            <polygon  points="65,10 70,0 85,5"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitEar6' 
                      offset={-0.3}
                      speed={-0.15}>
          <svg width="220" height="220">
            <polygon  points="60,84 85,40 85,70"
                      fill="#b98c66"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitEar7' 
                      offset={0.8}
                      speed={0.8}>
          <svg width="220" height="220">
            <polygon  points="85,70 85,36 105,40"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitFace0' 
                      offset={0.6}
                      speed={0.6}>
          <svg width="220" height="220">
            <polygon  points="20,64 60,84 25,105"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitFace1' 
                      offset={-0.7}
                      speed={-0.35}>
          <svg width="220" height="220">
            <polygon  points="13,85 20,64 25,105"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitFace2' 
                      offset={-0.4}
                      speed={-0.2}>
          <svg width="220" height="220">
            <polygon  points="0,85 13,85 20,64"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitFace3' 
                      offset={0.7}
                      speed={0.7}>
          <svg width="220" height="220">
            <polygon  points="0,85 2,90 13,85"
                      fill="#b98c66"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitFace4' 
                      offset={0.3}
                      speed={0.3}>
          <svg width="220" height="220">
            <polygon  points="2,90 13,85 25,105"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitFace5' 
                      offset={-0.3}
                      speed={-0.15}>
          <svg width="220" height="220">
            <polygon  points="2,90 18,106 25,105"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitNeck1' 
                      offset={0}
                      speed={0}>
          <svg width="220" height="220">
            <polygon  points="25,105 60,84 60,130"
                      fill="#b98c66"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitNeck2' 
                      offset={0.4}
                      speed={0.4}>
          <svg width="220" height="220">
            <polygon  points="22,120 25,105 60,130"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitNeck3' 
                      offset={-0.8}
                      speed={-0.4}>
          <svg width="220" height="220">
            <polygon  points="18,106 22,120 25,105"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitNeck4' 
                      offset={0.6}
                      speed={0.6}>
          <svg width="220" height="220">
            <polygon  points="22,120 60,130 40,160"
                      fill="#eeebe7"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitLeg1' 
                      offset={-0.6}
                      speed={-0.3}>
          <svg width="220" height="220">
            <polygon  points="40,160 40,180 30,200 25,178"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitLeg2' 
                      offset={-0.2}
                      speed={-0.1}>
          <svg width="220" height="220">
            <polygon  points="25,178 30,200 32,205 18,203"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitLeg3' 
                      offset={-0.6}
                      speed={-0.3}>
          <svg width="220" height="220">
            <polygon  points="18,203 32,205 25,210"
                      fill="#eeebe7"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBody1' 
                      offset={0.9}
                      speed={0.9}>
          <svg width="220" height="220">
            <polygon  points="40,160 40,180 60,175 60,130"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBody2' 
                      offset={-0.4}
                      speed={-0.2}>
          <svg width="220" height="220">
            <polygon  points="60,97 60,160 97,117 "
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBody3' 
                      offset={0.5}
                      speed={0.5}>
          <svg width="220" height="220">
            <polygon  points="60,160 97,117 100,140"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBody4' 
                      offset={0.8}
                      speed={0.8}>
          <svg width="220" height="220">
            <polygon  points="97,117 100,140 120,135"
                      fill="#b98c66"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBody5' 
                      offset={-0.4}
                      speed={-0.2}>
          <svg width="220" height="220">
            <polygon  points="60,160 100,140 95,175"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBody6' 
                      offset={0.3}
                      speed={0.3}>
          <svg width="220" height="220">
            <polygon  points="95,175 100,140 120,135 130,145"
                      fill="#b98c66"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitTummy' 
                      offset={0.9}
                      speed={0.9}>
          <svg width="220" height="220">
            <polygon  points="60,130 60,175 90,190 95,175"
                      fill="#eeebe7"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBackLeg1' 
                      offset={-0.7}
                      speed={-0.35}>
          <svg width="220" height="220">
            <polygon  points="95,175 90,190 125,175 130,145"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBackLeg2' 
                      offset={-0.2}
                      speed={-0.1}>
          <svg width="220" height="220">
            <polygon  points="90,190 90,212 125,192 125,175"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBackLeg3' 
                      offset={0.8}
                      speed={0.8}>
          <svg width="220" height="220">
            <polygon  points="125,192 125,175 130,145 150,175"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBackLeg4' 
                      offset={0.3}
                      speed={0.3}>
          <svg width="230" height="230">
            <polygon  points="136,184 130,230 65,230 75,220"
                      fill="#d1a47f"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBackLeg5' 
                      offset={-0.3}
                      speed={-0.15}>
          <svg width="230" height="230">
            <polygon  points="50,230 55,225 75,220 65,230"
                      fill="#eeebe7"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBack1' 
                      offset={0.6}
                      speed={0.6}>
          <svg width="220" height="220">
            <polygon  points="135,185 150,175 152,190"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBack2' 
                      offset={-0.6}
                      speed={-0.3}>
          <svg width="220" height="220">
            <polygon  points="135,185 131,220 152,190"
                      fill="#b98c66"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitBack3' 
                      offset={0.4}
                      speed={0.4}>
          <svg width="230" height="230">
            <polygon  points="131,220 130,230 147,230 145,200"
                      fill="#c9b4a2"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitTail1' 
                      offset={-0.7}
                      speed={-0.35}>
          <svg width="230" height="230">
            <polygon  points="145,200 145,210 160,205"
                      fill="#eeebe7"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitTail2' 
                      offset={0.1}
                      speed={0.1}>
          <svg width="230" height="230">
            <polygon  points="145,200 152,190 160,205"
                      fill="#eeebe7"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitTail3' 
                      offset={-0.4}
                      speed={-0.2}>
          <svg width="230" height="230">
            <polygon  points="152,190 162,190 160,205"
                      fill="white"/>
          </svg>
        </Parallax.Layer>
        <Parallax.Layer className='rabbitTail4' 
                      offset={0.9}
                      speed={0.9}>
          <svg width="230" height="230">
            <polygon  points="152,190 150.5,179 162,190"
                      fill="#eeebe7"/>
          </svg>
        </Parallax.Layer>
      </div>
  );
}

export default Rabbit;
