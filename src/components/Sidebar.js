import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [open, setOpen] = useState({});

  const toggleSubmenu = (index) => {
    setOpen(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <ul>
        <h4>API bot-zap</h4>
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
        <h4>Docs</h4>
          <li>
          <NavLink to="/primeiros-passos" activeClassName="active">Primeiros passos</NavLink>
            </li>
            <li>
          <NavLink to="/funcoes" activeClassName="active">Funcoes</NavLink>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
