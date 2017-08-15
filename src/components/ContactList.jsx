import React from 'react';
import { Table, Row, Col } from 'react-materialize';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
  const renderContacts = () =>
    contacts.map(contact => <Contact key={contact.id} {...contact} />);

  return (
    <Row>
      <Col m={10} offset={'m1'}>
        <Table hoverable bordered centered>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Эл. почта</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {renderContacts()}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ContactList;
