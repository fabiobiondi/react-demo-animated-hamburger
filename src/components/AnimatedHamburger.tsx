import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

export interface Item {
  icon: string;
  url: string;
}

export interface AnimatedHamburgerProps {
  items: Item[];
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const history = useHistory()

  const iconClickHandler = (url: string) => {
    setOpen(false);
    history.push(url)
  }

  return <nav className="menu">
    <span className={classNames('menu-open', {'opened': open})} />
    <label className="menu-open-button"  onClick={() => setOpen(!open)}  >
      <span className="hamburger hamburger-1" />
      <span className="hamburger hamburger-2" />
      <span className="hamburger hamburger-3" />
    </label>

    {
      props.items.map(item => {
        return <span className="menu-item" key={item.icon} onClick={() => iconClickHandler(item.url)}>
          <i className={item.icon} />
        </span>
      })
    }
  </nav>
};
