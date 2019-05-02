import React from 'react';
import BackgroundImage from '../images/mgs3.jpg';
import Logo from '../images/react.png';

class Home extends React.Component {
  render() {
    const style = {
      background: 'url(' + BackgroundImage + ') round',
      width: window.innerWidth,
      height: window.innerHeight - 100,
      display: 'flex'
    }
    const leftStyle = {
      width: '30%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const rightStyle = {
      width: '70%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const textColorStyle = {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30
    }
    return (
      <div style={style}>
        <div style={leftStyle}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={textColorStyle}>Badge</span>
            <span style={textColorStyle}>Management</span>
            <span style={textColorStyle}>System</span>
            <button style={{background: 'green', color: 'white', border: 'none', fontSize: 25, width: '60%'}}>
              Start
            </button>
          </div>
        </div>
        <div style={rightStyle}>
          <img src={Logo} alt='Logo'/>
        </div>
      </div>
    );
  }
}

export default Home;