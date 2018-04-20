import React from 'react';
import {DisplayFriend} from '../Friend/Friend';

export const DisplayFriends = (props) => {
  let display = <h1>please wait...</h1>
  if (props.friends.length > 0) {
    display=(
      <React.Fragment>
        {props.friends.map((friend) => {
          return(
            <DisplayFriend key={friend.id} {...friend}/>
          );
        })}
      </React.Fragment>
    )
  }
  return (
    <div className='listContainer'>
      {display}
    </div>
  );
}
