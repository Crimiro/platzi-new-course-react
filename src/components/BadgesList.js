import React from 'react';
import twitterLogo from '../images/twitterLogo.png';
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Create new badge
          </Link>
        </div>
      )
    }
    return(
      <div style={{paddingTop: 10}}>
        {this.props.badges.map((badge) => {
          return(
              <div key={badge.id} style={{paddingBottom: 20}}>
                <div style={{border: '1px solid gray', padding: 5}}>
                  <div style={{display: 'flex'}}>
                    <img src={badge.avatarUrl} width={80} height={80}/>
                    <div style={{paddingLeft: 10}}>
                      <span style={{fontWeight: 'bold'}}>
                        {badge.firstName} {badge.lastName}
                      </span>
                      <div>
                        <img src={twitterLogo} width={20} height={20} />
                        <span style={{fontWeight: 'bold', color: 'rgb(29,161,242)'}}>
                          @{badge.twitter}
                        </span>
                      </div>
                      <span style={{fontSize: 10}}>
                        {badge.jobTitle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
          )
        })}
      </div>
    )
  }
}

export default BadgesList