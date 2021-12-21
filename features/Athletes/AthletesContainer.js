import Athletes from './Athletes';

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/athletes`);
  const athletes = await res.json();

  if (!athletes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      athletes,
    },
  };
};

const AthletesContainer = (props) => <Athletes {...props} />;

export { AthletesContainer };
