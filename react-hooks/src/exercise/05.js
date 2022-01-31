// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'
import {useEffect} from "react";

function Tilt({children}) {
    const tiltRootRef = React.useRef();
    useEffect(() => {
        const tiltNode = tiltRootRef.current;
        VanillaTilt.init(tiltNode, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
        });
        return () => tiltNode.vanillaTilt.destroy();
    }, []);


    // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div className="tilt-root" ref={tiltRootRef}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
