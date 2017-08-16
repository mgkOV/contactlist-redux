import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { setContacts } from '../actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.setContacts();
  }

  render() {
    return (
      <div>
        <nav className="teal lighten-2">
          <div className="nav-wrapper">
            <a className="brand-logo center">Список Контактов</a>
          </div>
        </nav>
        <ContactForm {...this.props.contactToEdit} />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

const mapDispatchToProps = ({ contacts, contactToEdit }) => ({
  contacts,
  contactToEdit
});

export default connect(mapDispatchToProps, { setContacts })(App);
