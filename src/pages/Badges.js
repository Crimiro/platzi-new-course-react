import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/react.png';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: null
  }
  componentDidMount = () => {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null});
    try {
      const data = await api.badges.list();
      this.setState({
        data: data,
        loading: false, 
        error: null
      });      
    } catch(error) {
      this.setState({ loading: false, error: error});      
    }
  }
  render() {
    if(this.state.loading && this.state.data === undefined) {
      return <PageLoading/>;
    }
    if(this.state.error) {
      return <PageError error={this.state.error}/>
    }
    return (
      <React.Fragment>
        <div>
          <div style={{width: '100%'}}>
            <div>
              <div style={{display: 'flex', flexDirection: ' column', alignItems: 'center'}}>
                <img src={Logo} alt='Logo'/>
              </div>
            </div>
          </div>
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
            <Link to='/badges/new'>
              New Bagde
            </Link>
          </div>
          <div style={{width: '40%'}}>
            <div>
              <BadgesList badges={this.state.data}/>
            </div>
          </div>
          {this.state.loading && <MiniLoader/>}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges