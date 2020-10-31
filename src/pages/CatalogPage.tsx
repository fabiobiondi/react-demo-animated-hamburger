import React  from 'react';
import { NavLink } from 'react-router-dom';

export const CatalogPage: React.FC = () => {
  return <div className="page">
    <div className="page-wrapper">
      Catalog Page

      <NavLink to="/">
        <i className="fa fa-times close-button" />
      </NavLink>
    </div>
  </div>
};
