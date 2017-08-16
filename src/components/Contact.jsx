import React from 'react';
import { connect } from 'react-redux';
import { removeContact, setContactToEdit } from '../actions/actions';

const Contact = props => {
  const { id, name, phone, email } = props;
  const handleDelete = () => props.removeContact(id);
  const handleEdit = () => props.setContactToEdit({ id, name, phone, email });

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
          onClick={handleEdit}
          className="waves-effect waves-light btn"
          style={{ marginRight: '10px' }}
        >
          Изменить
        </a>
        <a
          onClick={handleDelete}
          className="waves-effect waves-light btn red lighten-1"
        >
          Удалить
        </a>
      </td>
    </tr>
  );
};

export default connect(null, { removeContact, setContactToEdit })(Contact);
