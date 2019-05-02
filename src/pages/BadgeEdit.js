import React from 'react';
import logo from '../images/confLogo.jpg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'; 
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };
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
        form: data
      });
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, [e.target.name]: e.target.value
      }
    })
  }
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      loading: true,
      error: null
    });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({loading: false});
      this.props.history.push('/badges');
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }
  render() {
    if(this.state.loading) {
      return <PageLoading/>
    }
    const headerDiv = {
      background: '#1C121B',
      width: '100%',
      height: 150,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 20
    }
    return(
      <div style={{background: 'lightgray'}}>
        <div style={headerDiv}>
          <img src={logo} alt='logo'/>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl='data:image/png;base64,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'/>
            </div>
            <div className='col-6'>
              <h1>
                Edit Attendant
              </h1>
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeEdit;