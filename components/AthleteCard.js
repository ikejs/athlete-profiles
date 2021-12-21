import { object } from 'prop-types';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import SportsList from 'components/SportsList';
import TeamsList from 'components/TeamsList';

const AthleteCard = ({ athlete }) => {
  const { about, athleteName, dob, imageUrl, sports, teams } = athlete;
  return (
    <Container className="col-md-8 mt-4 bg-white p-4 rounded">
      <Container className="d-flex">
        <Image
          src={imageUrl}
          width={250}
          height={250}
          className="rounded-circle"
        />
        <Container className="mx-2">
          <h1 className="display-4 mb-0">{athleteName}</h1>
          <p className="text-muted m-0">🎂 {dob}</p>
          <p className="mt-1">{about}</p>
          <TeamsList teams={teams} />
          <SportsList sports={sports} />
        </Container>
      </Container>
    </Container>
  );
};

AthleteCard.propTypes = {
  athlete: object,
};

export default AthleteCard;
