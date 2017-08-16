import React, { Component } from 'react';
import { Card, Row, Col, Icon, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { saveContact } from '../actions/actions';
import '../styles/contactForm.css';

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    phone: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveContact(this.state);
    this.setState({
      name: '',
      phone: '',
      email: ''
    });
  };

  handleInputChange = (e, value) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.id) {
      this.setState({
        id: nextProps.id,
        name: nextProps.name,
        email: nextProps.email,
        phone: nextProps.phone
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.name.focus();
      this.phone.focus();
      this.email.focus();
    }
  }

  render() {
    const { name, phone, email } = this.state;

    return (
      <Row style={{ marginTop: '55px' }}>
        <Col m={6} offset={'m3'}>
          <Card className="teal lighten-2" textClassName="white-text">
            <h4>Добавить контакт:</h4>
            <Row>
              <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    type="text"
                    className="validate"
                    name="name"
                    onChange={this.handleInputChange}
                    ref={input => (this.name = input)}
                    value={name}
                  />
                  <label>Имя</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">phone</i>
                  <input
                    type="tel"
                    className="validate"
                    name="phone"
                    onChange={this.handleInputChange}
                    ref={input => (this.phone = input)}
                    value={phone}
                  />
                  <label>Телефон</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">email</i>
                  <input
                    type="email"
                    className="validate"
                    name="email"
                    onChange={this.handleInputChange}
                    ref={input => (this.email = input)}
                    value={email}
                  />
                  <label>Эл. почта</label>
                </div>
                <Button waves="light">
                  Добавить<Icon right>add</Icon>
                </Button>
              </form>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect(null, { saveContact })(ContactForm);
