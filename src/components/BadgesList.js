import React from 'react';
import twitterLogo from '../images/twitterLogo.png';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';

function useSearchBadges(badges) {
  const [ query, setQuery] = React.useState('');
  const [ filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
      })
      setFilteredBadges(result);
    }, [badges, query]
  );
  return { query, setQuery, filteredBadges}
}

function BadgesList(props) {
  const { badges } = props;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
    if(filteredBadges.length === 0) {
      return (
        <div>
          <div className='form-group'>
            <label>Filter Badge</label>
            <input
              type='text'
              className='form-control'
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Create new badge
          </Link>
        </div>
      )
    }
    return(
      <div style={{paddingTop: 10}}>
        <div className='form-group'>
          <label>Filter Badge</label>
          <input
            type='text'
            className='form-control'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        {filteredBadges.map((badge) => {
          return(
              <div key={badge.id} style={{paddingBottom: 20}}>
                <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}>
                  <div style={{border: '1px solid gray', padding: 5}}>
                    <div style={{display: 'flex'}}>
                    <Gravatar
                      className="Badge__avatar"
                      email={badge.email}
                      alt="Avatar"
                    />
                      <div style={{paddingLeft: 10}}>
                        <span style={{fontWeight: 'bold'}}>
                          {badge.firstName} {badge.lastName}
                        </span>
                        <div>
                          <img src={twitterLogo} width={20} height={20} alt='Twitter Logo' />
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
                </Link>
              </div>
          )
        })}
      </div>
    )
}

export default BadgesList