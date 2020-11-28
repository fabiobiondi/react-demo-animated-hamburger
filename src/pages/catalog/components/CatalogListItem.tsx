import React  from 'react';
import { CatalogItem } from '../model/catalog-item';
import { MapQuest } from '../../../shared/MapQuest';

interface CatalogListItemProps {
  item: CatalogItem;
}
export const CatalogListItem: React.FC<CatalogListItemProps> = ({ item }) => {

  function openMap(city: string) {
    window.open(`https://www.google.com/maps/place/${city}`)
  }

  return <div className="col-sm-12 col-md-6 col-lg-4" key={item.id} >
    <MapQuest height={250} city={item.city} onClick={() => openMap(item.city)}/>
    <h4>{item.title}</h4>
    <p>{item.address} - {item.city}</p>
  </div>
};
