import { useEffect, useState } from 'react';
import { CatalogItem } from '../model/catalog-item';
import Axios from 'axios';

export function useCatalog() {
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);

  useEffect(() => {
    Axios.get<CatalogItem[]>('http://localhost:3001/catalog')
      .then(res => setCatalog(res.data))
  }, [])

  return catalog;
}
