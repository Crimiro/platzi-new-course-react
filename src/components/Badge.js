import React from 'react';
import confLogo from '../images/logo.svg';
class Badge extends React.Component {
  render() {

    return (
      <div>
        <div>
          <img src={confLogo} alt='Logo de la conferencia' height={80}/>
        </div>
        <div style={{display: 'flex'}}>
          <img 
            src={this.props.avatarUrl} alt='Avatar' height={150}
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