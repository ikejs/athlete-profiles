// import api
import Home from './Home';

const HomeContainer = () => {
  const onSubmit = async (data) => {
    // submit logic
  }

  const props = {
    onSubmit,
  };
  
  return <Home {...props} />;
};

export default HomeContainer;