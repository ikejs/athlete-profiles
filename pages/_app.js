import '../style/main.css';
import { func, object } from 'prop-types';
import Header from 'features/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: func,
  pageProps: object,
};
