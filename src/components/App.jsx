import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { recieveContacts } from '../actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.recieveContacts();
  }

  render() {
    return (
      <div>
        <nav className="teal lighten-2">
          <div className="nav-wrapper">
            <a className="brand-logo center">Список Контактов</a>
          </div>
        </nav>
        <ContactForm />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

const mapDispatchToProps = ({ contacts }) => ({
  contacts
});

export default connect(mapDispatchToProps, { recieveContacts })(App);
