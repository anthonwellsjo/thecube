import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function FadeIn({ children }) {
  const spring = useSpring({
    to: { opacity: "1" },
    from: { opacity: "0" },
  })

  return (
    <animated.div style={spring}>
      {children}
    </animated.div>
  )

};