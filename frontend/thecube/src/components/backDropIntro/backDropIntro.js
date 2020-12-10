import React, { useState, useEffect } from 'react';

const BackDropIntro = (props) => {
  const [opacity, setOpacity] = useState("1");
  const [mount, setMount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (!props.trans) {
        setOpacity("0");
        setTimeout(() => {
          setMount(false)
        }, 500)
      } else {
        setOpacity("1");
        setMount(true);
      }
    }, 500);
  }, [props.trans])

  if (!props.in) return null;

  return (
    <div style={{ transition: "opacity .5s linear", opacity: opacity, backgroundColor: "white", position: "fixed", top: mount ? "0" : "-1000px", height: "2000px", left: "0", width: "100%", zIndex: "1" }}></div>
  )
};

export default BackDropIntro;