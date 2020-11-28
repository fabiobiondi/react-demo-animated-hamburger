import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MapQuest } from '../shared/MapQuest';
import Axios from 'axios';

export const CatalogPage: React.FC = () => {
  const [catalog, setCatalog] = useState<any[]>([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/catalog')
      .then(res => setCatalog(res.data))
  }, [])

  function openMap(city: string) {
    window.open(`https://www.google.com/maps/place/${city}`)
  }


  return <div className="page">
    <div className="page-wrapper">
      <h3 className="title">Catalog Page</h3>

      <div className="row">
        {
          catalog.map((item => {

            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={item.id} >
                <MapQuest height={250} city={item.city} onClick={() => openMap(item.city)}/>
                <h4>{item.title}</h4>
                <p>{item.address} - {item.city}</p>
              </div>
            )
          }))
        }
      </div>

      <NavLink to="/">
        <i className="fa fa-times close-button" />
      </NavLink>
    </div>
  </div>
};
