import React  from 'react';
import { NavLink } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return <div className="page">
    <div className="page-wrapper">
      <h3 className="title">Home Page</h3>

      <NavLink to="/">
        <i className="fa fa-times close-button" />
      </NavLink>
    </div>
  </div>
};
