import React, { useContext, useEffect, useState } from 'react';
import { useSprings, animated, useSpring } from 'react-spring';
import { PageContext } from '../../context/pageContexts';
import classes from './hamburgerMenu.module.css';

export default function HamburgerMenu() {
  const [page, setPage] = useContext(PageContext);

  const [propsHolder, setPropsHolder] = useSpring(() => ({
    transform: "rotate(45deg)",
    opacity: "0",
    config: {
      mass: 20,
      tension: 1000,
      friction: 100
    }
  }));
  const [springs, set, stop] = useSprings(3, index => ({
    // transform: "translateX(0)",
    height: "4px",
    width: "40px",
    backgroundColor: "black",
    marginBottom: "8px",
    marginTop: (index == 0 && !page.mountMobileMenu) ? "5px" : "0",
    opacity: "1",
    from: {
      // transform: `translateY(-${(index + 1) * 100}px)`,
    },
    config: {
      mass: 1,
      tension: 100,
      friction: 5
    }
  }))

  const ToggleMobileMenu = () => {
    const mobileMenuMounted = page.mountMobileMenu;
    if (mobileMenuMounted) {
      setPage(prev => ({ ...prev, transitionMobileMenu: false, speedBackDrop: "300ms", delayBackDrop: 1, transitionBackDrop: false, }));
      set(index => ({
        marginBottom: "8px", marginTop: index == 0 ? "5px" : "0", height: "4px", borderRadius: "10px", backgroundColor: "black", opacity: "1",
        config: {
          mass: 1,
          tension: 100,
          friction: 20
        }
      }));
      setTimeout(() => {
        setPage(prev => ({ ...prev, mountMobileMenu: false, mountBackDrop: false, }));
      }, 305);
    }
    if (!mobileMenuMounted) {
      setPage(prev => ({ ...prev, speedBackDrop: "250ms", delayBackDrop: 1, mountMobileMenu: true, transitionMobileMenu: true, transitionBackDrop: true, mountBackDrop: true }));
      set(index => ({
        marginBottom: "0", marginTop: index == 0 ? "0" : "5px", height: index == 1 ? "40px" : "0", opacity: index == 1 ? "1" : "0", borderRadius: "0", config: {
          mass: 1,
          tension: 100,
          friction: 5
        }
      }));
    }
  }

  const onScrollEventHandler = () => {
    const mobileMenuMounted = page.mountMobileMenu;
    if (mobileMenuMounted) {
      ToggleMobileMenu();
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onScrollEventHandler);
    return () => {
      document.removeEventListener("scroll", onScrollEventHandler);
    }
  })

  useEffect(() => {
    const currentProps = page;
    setPropsHolder(props => ({ ...props, transform: currentProps.mountMobileMenu ? "rotate(45deg)" : "rotate(0)", opacity: currentProps.showBurgerMenu ? "1" : "0" }))
  }, [page.showBurgerMenu, page.mountMobileMenu])

  const onClickEventHandler = () => {
    ToggleMobileMenu();
  }


  return (
    <>
      <animated.div onClick={onClickEventHandler} style={propsHolder} className={classes.HamburgerContainer}>
        {springs.map((props, index) => <animated.div key={index} style={props} />)}
      </animated.div>
    </>
  )
};