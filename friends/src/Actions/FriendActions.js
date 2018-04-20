import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
  const promise = axios.get('http://localhost:5000/api/friends');
  return dispatch => {
    dispatch({type: FETCHING});
    promise
      .then(response => {
        dispatch({type: FETCHED, payload: response.data});
      })
  }
}

export const addFriend = (person) => {
  const promise = axios.post('http://localhost:5000/api/friends', person);
  return dispatch => {
    dispatch({type: FETCHING})
    promise
      .then(response => {
        dispatch({type:FETCHED, payload: response.data})
      })
  }
}

export const deleteFriend = (id) => {
  const promise = axios.delete(`http://localhost:5000/api/friends/${id}`);
  return dispatch => {
    promise
      .then(response => {
        dispatch({type: FETCHED, payload: response.data})
      })
  }
}
export const updateFriend = (changes, id) => {
  const promise = axios.put(`http://localhost:5000/api/friends/${id}`, changes);
  return dispatch => {
    promise
      .then(response => {
        dispatch({type: FETCHED, payload: response.data})
      })
  }
}
