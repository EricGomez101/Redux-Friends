import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchFriends, addFriend} from '../Actions/FriendActions';
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

  submitNewFriend = () => {
    this.props.addFriend({name:this.state.name, age: this.state.age, email: this.state.email});
    this.setState({name: '', age: '', email: ''});
  }

  render() {
    return (
      <div className="App">
        <h1 className='header'> Friends List:</h1>
        <div className='container'>
          <NewFriendForm {...this.state} updateValues={this.updateValues} submitNewFriend={this.submitNewFriend}/>
          <DisplayFriends friends={this.props.friends}/>
        </div>
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
export default connect(mapStateToProps, {fetchFriends, addFriend})(App);
