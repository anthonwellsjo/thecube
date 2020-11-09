import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function SlideIn({ children, direction }) {
  const spring = useSpring({
    to: { transform: 'translateX(0)', opacity: "1" },
    from: { transform: direction == "left" ? 'translateX(-200px)' : 'translateX(+200px)', opacity: "0" },
  })

  return (
    <animated.div style={spring}>
      {children}
    </animated.div>
  )

};