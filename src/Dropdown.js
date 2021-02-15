import React, { useState } from "react";
import onClickOutside from 'react-onclickoutside'


function Dropdown({ title, items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState([]);

  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!select.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelect([item]);
      } else if (multiSelect) {
        setSelect([...select, item]);
      }
    } else {
      let selectAfterRemoval = select;
      selectAfterRemoval = selectAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelect([...selectAfterRemoval]);
    }
  }

  function isItemInselect(item) {
    if (select.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dropdown-wrapper">
        <h2>Dropdown</h2>
      <div
        tabIndex={0}
        className="dropdown-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dropdown-title">
          <p className="dropdown-text">{title}</p>
        </div>
        <div className="dropdown-header__action">
          <p className="dropdown-text">{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li className="dropdown-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInselect(item) && "Selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
  };

export default onClickOutside(Dropdown, clickOutsideConfig);
