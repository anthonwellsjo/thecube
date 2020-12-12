import React, { useContext, useEffect } from 'react';
import { useSprings, animated } from 'react-spring';
import { PageContext } from '../../context/pageContexts';
import Centralizer from '../layout/centralizer/centralizer';
import classes from './mobileMenu.module.css';
import classnames from 'classnames';

const buttons = [
  {
    name: "Physical Space",
    path: "/"
  },
  {
    name: "Digital Space",
    path: "/"
  },
  {
    name: "Blog",
    path: "/"
  },
  {
    name: "Log In",
    style: classes.logIn,
    path: "/"
  },
  {
    name: "Register",
    style: classes.register,
    path: "/"
  }
]

export default function MobileMenu() {
  const [page, setPage] = useContext(PageContext);
  const [springs, set, stop] = useSprings(buttons.length, index => ({
    transform: page.transitionMobileMenu ? "translateY(0)" : `translateY(${10000 * index + 500}px)`,
    from: {
      transform: `translateY(${10000 * index + 1000}px)`
    },
    config: {
      mass: 5,
      tension: 2000,
      friction: 160
    }
  }))

  useEffect(() => {
    set(index => ({ transform: page.transitionMobileMenu ? "translateY(0)" : `translateY(${1000 * index + 1000}px)` }))
  }, [page.transitionMobileMenu])

  if (!page.mountMobileMenu) return null;

  return (
    <div className={page.transitionMobileMenu ? classes.container : classnames(classes.container, classes.away)}>
      <div className={classes.menu}>
        {springs.map((props, index) => {
          return (
            <React.Fragment key={index}>
              <animated.button
                style={props}
                className={buttons[index].style == undefined ? classes.button : classnames(classes.button, buttons[index].style)}>
                {buttons[index].name}
              </animated.button>
              {index == 2 && <Centralizer><animated.div style={props} className={classes.ball}></animated.div></Centralizer>}
            </React.Fragment>
          )
        })}
        {/* <button className={classes.button}>Log In</button>
        <button className={classes.button}>Register</button>
        <hr></hr>
        <button className={classes.button}>Physical space</button>
        <button className={classes.button}>Digital space</button>
        <button className={classes.button}>Blog</button> */}
      </div>
    </div>
  )
};