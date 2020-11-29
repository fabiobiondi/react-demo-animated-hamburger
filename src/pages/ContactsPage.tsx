import React  from 'react';
import { NavLink } from 'react-router-dom';

export const ContactsPage: React.FC = () => {
  return <div className="page">
    <div className="page-wrapper">
      <h2 className="title">Contacts</h2>

      <NavLink to="/">
        <i className="fa fa-times close-button" />
      </NavLink>
    </div>
  </div>
};
