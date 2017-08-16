import firebase from 'firebase';
import t from './types';
import config from '../config/config';

try {
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

const firebaseRef = firebase.database().ref().child('contact');

const recieveContacts = async dispatch => {
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
  console.log('recieving contacts...');
  dispatch({ type: t.RECIEVE_CONTACTS, payload: contacts });
};

export const setContacts = () => {
  return dispatch => {
    recieveContacts(dispatch);
  };
};

export const removeContact = id => {
  return async dispatch => {
    await firebaseRef.update({ [id]: null });
    recieveContacts(dispatch);
  };
};

export const saveContact = ({ id, name, phone, email }) => {
  return async dispatch => {
    if (!id) {
      await firebaseRef.push({ name, phone, email });
    } else {
      await firebaseRef.update({ [id]: { name, phone, email } });
    }

    recieveContacts(dispatch);
  };
};

export const setContactToEdit = contact => {
  return { type: t.CONTACT_TO_EDIT, payload: contact };
};
