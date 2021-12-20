import Head from 'next/head';
import { func } from 'prop-types';
import { Container } from 'react-bootstrap';
import AddAthleteForm from 'components/AddAthleteForm';

const Home = ({ onSubmit }) => (
  <>
    <Head>
      <title>Register Athlete - Athlete Profiles</title>
    </Head>
    <Container className="col-md-4 mt-4">
      <h1 className="text-light mb-4">
        <strong>Register</strong>
      </h1>
      <AddAthleteForm onSubmit={onSubmit} />
    </Container>
  </>
);

Home.propTypes = {
  onSubmit: func,
};

export default Home;
