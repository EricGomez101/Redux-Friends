import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchFriends} from '../Actions/FriendActions';
import {DisplayFriends} from '../Components/DisplayFriends/DisplayFriends';
import {NewFriendForm} from '../Components/NewFriendForm/NewFriendForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      age: '',
      email: '',
    };
  }

  updateValues = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount() {
   this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <h1 className='header'> Friends List:</h1>
        <NewFriendForm {...this.state} updateValues={this.updateValues}/>
        <DisplayFriends friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
  }
}
export default connect(mapStateToProps, {fetchFriends})(App);
