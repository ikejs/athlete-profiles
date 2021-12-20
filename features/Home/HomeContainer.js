import { useRouter } from 'next/router';
import Home from './Home';

const HomeContainer = () => {
  const router = useRouter();

  const onSubmit = async (data) => {
    fetch('/api/athletes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((athlete) => router.push(`/athletes/${athlete._id}`));
  };

  const props = {
    onSubmit,
  };

  return <Home {...props} />;
};

export { HomeContainer };
