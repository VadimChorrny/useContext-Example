import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../styles/CarStyles/Header.css';

function Header() {
  const data = useContext(Context); // Third Step - Using Context anywhere
  const themeRef = React.useRef();
  const [state, setState] = useState(false);

  return (
    <header ref={themeRef}>
      {/* <img src={value.logo} /> */}
      <div>
        <h1>{data.name}</h1>
      </div>
      <button
        onClick={() => {
          console.log('Touched!');
          if (state) {
            themeRef.current.style.background = data.themes.light.background;
            setState(false);
          } else {
            themeRef.current.style.background = data.themes.dark.background;
            setState(true);
          }
        }}
      >
        Change theme
      </button>
    </header>
  );
}

export default Header;
