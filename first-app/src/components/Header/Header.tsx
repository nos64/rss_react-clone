import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Container from 'components/Container';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { setActivItem } from '../../store/apiReducer';

const Header = () => {
  const dispatch = useAppDispatch();
  const activeItem = useAppSelector((state) => state.apiData.activeItem);
  const handleClick = () => {
    dispatch(setActivItem(null!));
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
