import React from 'react';
import PropTypes from 'prop-types';
import { ListButton, ListItem } from './ContactsList.styled';

export default function ContactsList({ contacts, deleteContacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <ListButton onClick={() => deleteContacts(contact.id)}>
              Delete
            </ListButton>
          </ListItem>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContacts: PropTypes.func.isRequired,
}.isRequired;
