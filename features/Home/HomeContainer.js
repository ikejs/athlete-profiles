import { useRouter } from 'next/router';
import uploadImage from 'utils/uploadImage';
import Home from './Home';

const HomeContainer = () => {
  const router = useRouter();

  const onSubmit = async (data) => {
    const imageUrl = await uploadImage(data.photo[0]);
    data.imageUrl = imageUrl;
    fetch('/api/athletes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ _id }) => {
        if (!_id) {
          alert('There was a problem submitting the form. Please try again.');
        } else {
          return router.push(`/athletes/${_id}`);
        }
      });
  };

  const props = {
    onSubmit,
  };

  return <Home {...props} />;
};

export { HomeContainer };
