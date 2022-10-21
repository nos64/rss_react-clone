import Container from 'components/Container/Container';
import React from 'react';
import style from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <main>
      <Container>
        <h1 className={style.title}>404</h1>
        <p className={style.description}> Sorry, Page Not Found</p>
      </Container>
    </main>
  );
};

export default NotFoundPage;
