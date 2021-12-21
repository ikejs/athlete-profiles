import { AthleteContainer } from 'features/Athlete';

export const getServerSideProps = async ({ params: { _id } }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/athletes/${_id}`);
  const athlete = await res.json();

  if (!athlete) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      athlete,
    },
  };
};

export default AthleteContainer;
