import { Badge } from 'react-bootstrap';
import { array } from 'prop-types';
import { sports as sportsObjects } from '../constants';

const SportsList = ({ sports }) => {
  const list = sports.map(
    (sport) => sportsObjects.find((a) => a.value === sport).label
  );
  return (
    <div className="d-flex">
      {list.map((sport) => (
        <Badge bg="secondary me-2">{sport}</Badge>
      ))}
    </div>
  );
};

SportsList.propTypes = {
  sports: array,
};

export default SportsList;
