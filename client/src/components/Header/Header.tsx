import React from "react";

import "./header.styles.css";
import { NavLink } from "react-router-dom";

const Header: React.FC<Props> = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h2>
          КУПИ<i>АВТО</i>
        </h2>
        <button className="catalog-button">
          <span className="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <NavLink title="favorites" to="/">
            Каталог
          </NavLink>
        </button>
      </div>
      <div className="header-right">
        <div className="contact-info">
          <p>Москва, Волгоградский пр-кт, 43, стр 1</p>
          <p>+7 800 555 35 35</p>
        </div>

        <NavLink className="favorite-button" title="favorites" to="/favorites">
          <span className="icon">
            <svg
              width="22"
              height="15"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24Z"
                fill="#4F2CD9"
              />
            </svg>
          </span>
          <span className="text">Избранное</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
