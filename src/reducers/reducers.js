import { combineReducers } from 'redux';
import t from '../actions/types';

const contacts = (state = [], action) => {
  switch (action.type) {
    case t.RECIEVE_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts
});
