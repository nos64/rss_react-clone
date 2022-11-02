import APICardDetails from 'components/APICardDetails';
import Container from 'components/Container';
import React from 'react';
// import { useParams } from 'react-router-dom';

const APICardDetailsPage = () => {
  // const { id } = useParams();
  return (
    <Container>
      <APICardDetails />
    </Container>
  );
};

export default APICardDetailsPage;
