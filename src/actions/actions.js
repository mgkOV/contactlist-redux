import firebase from 'firebase';
import t from './types';
import config from '../config/config';

const fbApp = firebase.initializeApp(config);
const firebaseRef = fbApp.database().ref().child('contact');

export const recieveContacts = () => {
  return async dispatch => {
    let contacts = [];
    const snapshot = await firebaseRef.once('value');

    snapshot.forEach(childShapshot => {
      const { name, phone, email } = childShapshot.val();
      contacts.push({
        id: childShapshot.key,
        name,
        phone,
        email
      });
    });

    dispatch({ type: t.RECIEVE_CONTACTS, payload: contacts });
  };
};

export const removeContact = () => {
  return dispatch => {};
};
