import React from 'react';
import logo from '../images/foxHoundLogo.png';

class Navbar extends React.Component {
  render() {
    return(
      <div style={{background: 'gray'}}>
        <div style={{paddingLeft: 20}}>
          <a href='/'>
            <img src={logo} alt='logo' height={100}/>
            <span style={{color: 'black', paddingLeft: 10}}>FoxHound</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar;