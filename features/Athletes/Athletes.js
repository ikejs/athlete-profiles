import { array } from 'prop-types';
import { Container } from 'react-bootstrap';
import AthleteCard from 'components/AthleteCard';

const Athletes = ({ athletes }) => (
  <Container className="col-md-8">
    {athletes.map((athlete) => (
      <AthleteCard athlete={athlete} />
    ))}
  </Container>
);

Athletes.propTypes = {
  athletes: array,
};

export default Athletes;
