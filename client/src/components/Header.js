import React from 'react'
import '../App.css';

const Header = (props) => {  
  return (
    <div className="Header">
      <h1 data-testid="h1tag" className="HeadLine">{ props.text }</h1>
      {/* <img src={process.env.PUBLIC_URL + 'favicon-32.png'} alt="logo" /> */}
    </div>
  );
}

Header.defaultProps = {
  text: "Shades of Green"
}

export { Header }