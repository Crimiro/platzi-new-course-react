import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/foxHoundLogo.png';

class Navbar extends React.Component {
  render() {
    return(
      <div style={{background: 'gray'}}>
        <div style={{paddingLeft: 20}}>
          <Link to='/'>
            <img src={logo} alt='logo' height={100}/>
            <span style={{color: 'black', paddingLeft: 10}}>FoxHound</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;