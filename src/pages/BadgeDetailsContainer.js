import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
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
  handleOpenModal = () => {
    this.setState({modalIsOpen: true});
  }
  handleCloseModal = () => {
    this.setState({modalIsOpen: false});
  }
  handleDeleteBadge = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
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
    if(this.state.error) {
      return <PageError error={this.state.error}/>
    }
    const badge = this.state.data;
    return (
      <BadgeDetails badge={this.state.data} onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} onDeleteBadge={this.handleDeleteBadge} modalIsOpen={this.state.modalIsOpen}/>
    );
  }
}

export default BadgeDetailsContainer;