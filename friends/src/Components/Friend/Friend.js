import React, {Component} from 'react';
import {store} from '../../index';
import {deleteFriend, updateFriend} from '../../Actions/FriendActions';

export class DisplayFriend extends Component {
  constructor(props){
    super(props);
    this.state={
      showButtons: false,
      showForm: false,
      name: '',
      age: '',
      email: '',
    };
  }

  changeButtonState = (state) => {
    if (state === 'showButtons' && this.state.showForm === true) {
      this.setState({[state]: !this.state[state], showForm: !this.state.showForm})
    }
    this.setState({[state]: !this.state[state]});
  }

  updateInputValue = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitChanges = () => {
    let changes = {};
    if (this.state.name !== '') {
      changes.name = this.state.name;
    }
    if (this.state.age !== '') {
      changes.age = this.state.age;
    }
    if ( this.state.email !== '') {
      changes.email = this.state.email;
    }
    store.dispatch(updateFriend(changes, this.props.id))
  }
  render(){
    let buttons = null;
    let inputForm = null;

    if(this.state.showButtons === true) {
      buttons = (
        <div>
          <button className='updateButton' onClick={() => store.dispatch(deleteFriend(this.props.id))}>Delete</button>
          <button className='updateButton' onClick={() => this.changeButtonState('showForm')}>Update</button>
        </div>
      );
    }

    if (this.state.showForm === true) {
      inputForm = (
        <div>
          <input
            className='input'
            value={this.state.name}
            name='name'
            onChange={this.updateInputValue}
            placeholder='name'
          />
          <input
            className='input'
            name='age'
            value={this.state.age}
            onChange={this.updateInputValue}
            placeholder='age'
          />
          <input
            className='input'
            name='email'
            value={this.state.email}
            onChange={this.updateInputValue}
            placeholder='email'
          />
          <button onClick={this.submitChanges}>Submit Update</button>
        </div>
      );
    }

    return (
      <div className='listItem'>
        <p className='centerText'>{this.props.name} </p>
        <p>Age: {this.props.age}</p>
        <p>{this.props.email}</p>
        <button className='displayButtons' onClick={() => this.changeButtonState('showButtons')}>V</button>
        {buttons}
        {inputForm}
      </div>
    );
  }
}
