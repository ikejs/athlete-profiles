import Athlete from './Athlete';

const AthleteContainer = (props) => {
  const onSubmit = async (data) => {
    console.log('submitting edits!', data);
  };

  return <Athlete {...props} onSubmit={onSubmit} />;
};

export { AthleteContainer };
