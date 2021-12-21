import AthleteCard from 'components/AthleteCard';

const AthleteContainer = (props) => {
  const onSubmit = async (data) => {
    console.log('submitting edits!', data);
  };

  // return <Athlete {...props} onSubmit={onSubmit} />;
  return <AthleteCard {...props} />;
};

export { AthleteContainer };
