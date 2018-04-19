import {FETCHING, FETCHED, ERROR} from '../Actions/FriendActions';

const init = {friends: [], fetchingFriends: false, error: null};

export const friendsReducer = (state=init, action) => {
  switch (action.type){
    case FETCHING:
      return Object.assign({}, state, {fetchingFriends: true})
    case FETCHED:
      return Object.assign({}, state, {friends: [...action.payload], fetchingFriends: false})
    case ERROR:
      return Object.assign({}, state, { error: action.payload, fetchingFriends: false })
    default:
      return state
  }
}
