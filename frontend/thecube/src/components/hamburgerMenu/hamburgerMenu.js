import React, { useContext, useEffect, useState } from 'react';
import { useSprings, animated } from 'react-spring';
import { PageContext } from '../../context/pageContexts';
import classes from './hamburgerMenu.module.css';

export default function HamburgerMenu() {
  const [page, setPage] = useContext(PageContext);
  const [springs, set, stop] = useSprings(3, index => ({
    // transform: "translateX(0)",
    height: "4px",
    width: "40px",
    backgroundColor: "black",
    marginBottom: "8px",
    marginTop: (index == 0 && !page.mountMobileMenu) ? "5px" : "0",
    from: {
      // transform: `translateY(-${(index + 1) * 100}px)`,
    },
    config: {
      mass: 20,
      tension: 1000,
      friction: 200
    }
  }))

  const ToggleMobileMenu = () => {
    const mobileMenuMounted = page.mountMobileMenu;
    if (mobileMenuMounted) {
      setPage(prev => ({ ...prev, transitionMobileMenu: false, speedBackDrop: "300ms", delayBackDrop: 1, transitionBackDrop: false, }));
      set(index => ({ marginBottom: "8px", marginTop: index == 0 ? "5px" : "0", height: "4px", borderRadius: "10px", backgroundColor: "black" }));
      setTimeout(() => {
        setPage(prev => ({ ...prev, mountMobileMenu: false, mountBackDrop: false, }));
      }, 305);
    }
    if (!mobileMenuMounted) {
      setPage(prev => ({ ...prev, speedBackDrop: "250ms", delayBackDrop: 1, mountMobileMenu: true, transitionMobileMenu: true, transitionBackDrop: true, mountBackDrop: true }));
      set(index => ({ marginBottom: "0", marginTop: index == 0 ? "0" : "5px", height: "12px", borderRadius: "0" }));

    }
  }

  const onScrollEventHandler = () => {
    const mobileMenuMounted = page.mountMobileMenu;
    if (mobileMenuMounted) {
      setPage(prev => ({ ...prev, transitionMobileMenu: false, speedBackDrop: "300ms", delayBackDrop: 1, transitionBackDrop: false, }));
      set(index => ({ marginBottom: "8px", marginTop: index == 0 ? "5px" : "0", height: "4px", borderRadius: "10px", backgroundColor: "black" }));
      setTimeout(() => {
        setPage(prev => ({ ...prev, mountMobileMenu: false, mountBackDrop: false, }));
      }, 305);
    }

  }

  useEffect(() => {
    document.addEventListener("scroll", onScrollEventHandler);
    return () => {
      document.removeEventListener("scroll", onScrollEventHandler);
    }
  })

  const onClickEventHandler = () => {
    ToggleMobileMenu();
  }


  return (
    <div onClick={onClickEventHandler} style={{ opacity: page.showBurgerMenu ? "1" : "0" }} className={classes.HamburgerContainer}>
      {springs.map((props, index) => <animated.div key={index} style={props} />)}
    </div>
  )
};