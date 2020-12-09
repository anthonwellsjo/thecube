import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function LineAnimation(props) {
  const anim = useSpring({ x2: props.hover ? props.end : props.start, from: { x2: props.hover ? props.start : props.end } });
  return (
    <svg height="12px" width="500">
      <animated.line x1={110} y1={0} x2={anim.x2} y2={0} strokeWidth={props.fat} stroke="black" />
    </svg>
  )
};