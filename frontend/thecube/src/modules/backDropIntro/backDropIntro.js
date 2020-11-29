import React, { useState } from 'react';

const BackDropIntro = (props) => {
  const [opacity, setOpacity] = useState("1");
  const [mount, setMount] = useState(true);
  setTimeout(() => {
    if (props.in) {
      setOpacity("0");
      setTimeout(() => {
        setMount(false)
      }, 500)
    }
  }, 500)

  return (
    mount ? <div style={{ transition: "all .5s linear", opacity: opacity, backgroundColor: "white", position: "fixed", top: "0", bottom: "0", left: "0", right: "0", zIndex: "100" }}></div> : null
  )
};

export default BackDropIntro;