import React, { Component } from 'react';
import { Card, Row, Col, Input, Icon, Button } from 'react-materialize';
import '../styles/contactForm.css';

class ContactForm extends Component {
  render() {
    return (
      <Row style={{ marginTop: '55px' }}>
        <Col m={6} offset={'m3'}>
          <Card className="teal lighten-2" textClassName="white-text">
            <h4>Добавить контакт:</h4>
            <Row>
              <form>
                <Input s={12} label="Имя" validate>
                  <Icon>account_circle</Icon>
                </Input>
                <Input s={12} label="Телефон" validate type="tel">
                  <Icon>phone</Icon>
                </Input>
                <Input s={12} label="Эл. почта" validate type="email">
                  <Icon>email</Icon>
                </Input>
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

export default ContactForm;
