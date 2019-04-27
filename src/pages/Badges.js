import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/react.png';
import Badge from '../components/Badge';
import BadgesList from '../components/BadgesList';

import api from '../api';

class Badges extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: null
  }
  componentDidMount = () => {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null});
    try {
      const data = await api.badges.list();
        // {
        //   id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        //   firstName: "Freda",
        //   lastName: "Grady",
        //   email: "Leann_Berge@gmail.com",
        //   jobTitle: "Legacy Brand Director",
        //   twitter: "FredaGrady22221-7573",
        //   avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
        // },
        // {
        //   id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        //   firstName: "Major",
        //   lastName: "Rodriguez",
        //   email: "Ilene66@hotmail.com",
        //   jobTitle: "Human Research Architect",
        //   twitter: "ajorRodriguez61545",
        //   avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
        // },
        // {
        //   id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        //   firstName: "Daphney",
        //   lastName: "Torphy",
        //   email: "Ron61@hotmail.com",
        //   jobTitle: "National Markets Officer",
        //   twitter: "DaphneyTorphy96105",
        //   avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
        // }
      // ];
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
    if(this.state.loading) {
      return 'Loading...';
    }
    if(this.state.error) {
      return 'Error: ' + this.state.error.message;
    }
    return (
      <React.Fragment>
        <div>
          <div style={{width: '100%'}}>
            <div>
              <div style={{display: 'flex', flexDirection: ' column', alignItems: 'center'}}>
                <img src={Logo}/>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Badges