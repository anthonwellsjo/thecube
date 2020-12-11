import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import { PageContext } from '../../../../context/pageContexts';
import LineAnimation from '../../../animations/lineAnimation';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './hBadge2.module.css';
import classnames from 'classnames';

export default function HBadge2(props) {
  const [page, setPage] = useContext(PageContext);
  const [hover, setHover] = useState(false);

  const onMouseOver = () => {
    if (!hover) {
      setHover(true);
      console.log("set true", hover);
    }
  }
  const onMouseLeave = () => {
    if (hover) {
      setHover(false);
      console.log("set false", hover);
    }
  }

  return (
    <Link to="/physical">
      <Centralizer>
        <div className={classnames("indexItemGlobal", classes.wrapper)} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} onFocus={onMouseOver}>
          <Centralizer>
            <div className={classes.colorBox}>
              <div className={classes.textHolder}>
                {page.windowWidth > 550 && <p className={classes.text}>Have a look and let's get</p>}
                <h1 className={classes.bigtext} style={{ transition: "transform 1s", transform: hover ? "skewX(-20deg)" : "skewX(0)" }}>Physical</h1>
                {page.windowWidth > 550 && <p className={classes.text2}>take me there</p>}
              </div>
              {page.windowWidth > 550 && <div style={{ position: "absolute", bottom: "0", width: "100%", right: "30px" }}>
                <LineAnimation fat={page.windowWidth / 100} end={page.windowWidth / 3} start={100} hover={hover} />
              </div>}
            </div>
            <img src='https://picsum.photos/950/400' style={{ position: "absolute", left: "0", transform: hover ? "scale(1.2)" : "scale(1)", transition: "transform 3s" }} />
          </Centralizer>
        </div >
      </Centralizer>
    </Link>
  )
};