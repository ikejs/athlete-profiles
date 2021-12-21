import { Card } from 'react-bootstrap';
import { array } from 'prop-types';

const SportsList = ({ teams }) => (
  <div className="d-flex mb-2">
    {teams.map((team) => (
      <Card className="p-1 me-2 bg-dark text-light">{team}</Card>
    ))}
  </div>
);

SportsList.propTypes = {
  teams: array,
};

export default SportsList;
