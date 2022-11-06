import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import Container from 'components/Container';
import { GlobalContext } from 'contexts/GlobalContext';
const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { activeItem } = state;

  const handleClick = () => {
    dispatch({ type: 'activeItem', payload: null });
  };

  return (
    <header className={style.header}>
      <Container>
        <ul className={style.link__list}>
          <li onClick={handleClick} className={style.link__item}>
            <NavLink className={style.link} to="">
              API
            </NavLink>
          </li>
          <li onClick={handleClick} className={style.link__item}>
            <NavLink className={style.link} to="/form">
              Form
            </NavLink>
          </li>
          <li onClick={handleClick} className={style.link__item}>
            <NavLink className={style.link} to="/firstPage">
              First Page
            </NavLink>
          </li>
          <li onClick={handleClick} className={style.link__item}>
            <NavLink className={style.link} to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
        {activeItem && (
          <p className={style.about}>
            About: <span className={style.aboutText}>{activeItem.name}</span>
          </p>
        )}
      </Container>
    </header>
  );
};

export default Header;
