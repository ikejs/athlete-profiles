import Head from 'next/head';
import { array, string } from 'prop-types';
import { Container, Row, Card, Button } from 'react-bootstrap';
import AddAthleteForm from 'components/AddAthleteForm'

const Home = () => {

  const onSubmit = data => console.log(data);

  return(
    <>
      <Head>
        <title>Register Athlete - Athlete Profiles</title>
      </Head>
      <Container className="col-md-4 mt-4">
        <h1 className="text-light mb-4">
          <strong>
            Register
          </strong>
        </h1>
        <AddAthleteForm onSubmit={onSubmit}  />
      </Container>
    </>
  )
};

export default Home;
