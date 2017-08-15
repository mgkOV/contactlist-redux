import React from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../actions/actions';

const Contact = ({ name, phone, email }) => {
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {phone}
      </td>
      <td>
        {email}
      </td>
      <td>
        <a
          className="waves-effect waves-light btn"
          style={{ marginRight: '10px' }}
        >
          Изменить
        </a>
        <a className="waves-effect waves-light btn red lighten-1">Удалить</a>
      </td>
    </tr>
  );
};

export default connect()(Contact);
