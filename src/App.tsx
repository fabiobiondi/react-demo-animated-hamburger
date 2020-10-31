import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';
import { CatalogPage } from './pages/CatalogPage';
import { AnimatedHamburger, Item } from './components/AnimatedHamburger';

export const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    Axios.get<Item[]>('http://localhost:3001/configRoutes')
      .then(res => {
        setItems(res.data)
      })
  }, []);

  const goto = (url: string) => {
    // do anything
    // change route (/my-page)
    window.location.pathname = url;
    // or open a new location (http://...)
    // window.open(url)
  }

  return (
    <div>
      <AnimatedHamburger items={items} iconClick={goto} />

      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
        </Switch>
      </BrowserRouter>

      {/*<pre style={{paddingTop: 250, fontSize: 20}}>
        {`<AnimatedHamburger items={items} iconClick={goto} />`}
      </pre>*/}

    </div>
  )
};

export default App;
