import React from 'react';
import confLogo from '../images/confLogo.jpg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center', background: '#1C121B'}}>
          <img src={confLogo} alt='Logo de la conferencia' height={80}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Gravatar
            email={this.props.email}
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>
        <div>
          <h3>
            {this.props.jobTitle}
          </h3>
          <div>
            @{this.props.twitter}
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;