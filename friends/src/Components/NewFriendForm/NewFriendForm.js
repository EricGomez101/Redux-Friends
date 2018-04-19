import React from 'react';
import './NewFriendForm.css';
import {store} from '../../index';
import {updateFriends} from '../../Actions/FriendActions'

export const NewFriendForm = (props) => {
  return(
    <div className='inputContainer'>
      <h4>Enter your new friend</h4>
      <input
        className='input'
        name='name'
        value={props.name}
        onChange={props.updateValues}
        placeholder='enter friend name'
      />
      <input
        className='input'
        name='age'
        type='number'
        value={props.age}
        onChange={props.updateValues}
        placeholder='enter friend age'
      />
      <input
        className='input'
        name='email'
        type='email'
        value={props.email}
        onChange={props.updateValues}
        placeholder='enter friend email'
      />
      <button type='button' onClick={ () => store.dispatch(updateFriends({name:props.name, age: props.age, email: props.email}))}>Submit new friend</button>
    </div>
  );
}
