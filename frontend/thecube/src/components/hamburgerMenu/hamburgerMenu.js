import React, { useContext, useState } from 'react';
import { useSprings, animated } from 'react-spring';
import { PageContext } from '../../context/pageContexts';
import classes from './hamburgerMenu.module.css';

export default function HamburgerMenu() {
  const [page, setPage] = useContext(PageContext);
  const [hamburgerOpen, setHamburgerOpen] = useState(true);
  const [springs, set, stop] = useSprings(3, index => ({
    // transform: "translateX(0)",
    height: "4px",
    width: "40px",
    backgroundColor: "black",
    marginBottom: "8px",
    marginTop: (index == 0 && !page.hamburgerOpen) ? "5px" : "0",
    from: {
      // transform: `translateY(-${(index + 1) * 100}px)`,
    },
    config: {
      mass: 20,
      tension: 1000,
      friction: 200
    }
  }))

  const onClickEventHandler = () => {
    const isOpen = page.hamburgerOpen;
    setPage(prev => ({ ...prev, hamburgerOpen: !isOpen }));
    console.log(isOpen);
    set(index => ({ marginBottom: isOpen ? "8px" : "0", marginTop: (index == 0 && !isOpen) ? "0" : "5px", height: isOpen ? "4px" : "12px", borderRadius: isOpen? "10px" : "0", backgroundColor: isOpen? "black" : "darkgrey" }));

  }

  // // Update springs with new props
  // set(index => ({ opacity: 0 }))
  // // Stop all springs
  // stop()
  return (
    <div onClick={onClickEventHandler} className={classes.HamburgerContainer}>
      {springs.map((props, index) => <animated.div key={index} style={props} />)}
    </div>
  )
};