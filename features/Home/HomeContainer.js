import { useRouter } from 'next/router';
import { upload } from 'middleware/firebase';
import Home from './Home';

const HomeContainer = () => {
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data.photo[0]);
    const imageUrl = await upload(data.photo[0]);
    console.log(imageUrl);

    // fetch('/api/athletes', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((athlete) => router.push(`/athletes/${athlete._id}`));
  };

  const props = {
    onSubmit,
  };

  return <Home {...props} />;
};

export { HomeContainer };
