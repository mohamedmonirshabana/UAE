import React from 'react';

const ItemMenu = (props) => {
  function resu() {
    props.onsort('byName');
  }

  return (
    <section className="main-menu">
      <ul className="menu-list">
        <li className="main-list-items">
          <a href="#" onClick={resu}>
            By Name
          </a>
        </li>
        <li className="main-list-items">
          <a href="#">Search</a>
        </li>
      </ul>
    </section>
  );
};

export default ItemMenu;
