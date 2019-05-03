import React from 'react';
import confLogo from '../images/confLogo.jpg';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import Badge from '../components/Badge';

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async (e) => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }
  render() {
    if(this.state.loading) {
      return <PageLoading/>
    }
    if(this.state.error) {
      return <PageError error={this.state.error}/>
    }
    const badge = this.state.data;
    return (
      <div>
        <div>
          <div className='container' style={{background: '#1C121B'}}>
            <div className='row'>
              <div className='col-6' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={confLogo} alt='logo de la conferencia' width={150}/>
              </div>
              <div className='col-6' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{color: '#826289'}}>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-6' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Badge 
                  firstName={badge.firstName}
                  lastName={badge.lastName}
                  email={badge.email}
                  jobTitle={badge.jobTitle}
                  twitter={badge.twitter}
                />
              </div>
              <div className='col-6' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default BadgeDetails;