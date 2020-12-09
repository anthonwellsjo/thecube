import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function LineAnimation(props) {
  const anim = useSpring(100);
  return (
    <animated.svg 
      style={{ position: "absolute", left: "150px", height: "50px", width: "250px" }} 
      strokeWidth="12" 
      strokeDashoffset={props.hover ? 0 : 0}>
      <path stroke="black"  d="M0 20 H100" />
    </animated.svg>
  )
};