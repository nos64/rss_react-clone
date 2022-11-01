import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import Container from 'components/Container';
import { GlobalContext } from 'contexts/GlobalContext';
const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { activeItem, currentPage, responseFromServer } = state;
  return (
    <header className={style.header}>
      <Container>
        <ul className={style.link__list}>
          <li className={style.link__item}>
            <Link className={style.link} to="/">
              API
            </Link>
          </li>
          <li className={style.link__item}>
            <Link className={style.link} to="/form">
              Form
            </Link>
          </li>
          <li className={style.link__item}>
            <Link className={style.link} to="/firstPage">
              First Page
            </Link>
          </li>
          <li className={style.link__item}>
            <Link className={style.link} to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
