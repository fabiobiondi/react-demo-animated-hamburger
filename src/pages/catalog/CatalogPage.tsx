import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import { CatalogItem } from './model/catalog-item';
import { CatalogList } from './components/CatalogList';

export const CatalogPage: React.FC = () => {
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);

  useEffect(() => {
    Axios.get<CatalogItem[]>('http://localhost:3001/catalog')
      .then(res => setCatalog(res.data))
  }, [])

  return <div className="page">
    <div className="page-wrapper">
      <h3 className="title">Catalog Page</h3>
      <CatalogList items={catalog} />
      <NavLink to="/">
        <i className="fa fa-times close-button" />
      </NavLink>
    </div>
  </div>
};
