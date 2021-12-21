import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavComponent = () => {
  const router = useRouter();

  return (
    <Navbar className="blue-nav" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Athlete Profiles</Navbar.Brand>
        </Link>
        <Nav className="justify-content-end" activeKey={router.asPath}>
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link>Register</Nav.Link>
            </Link>
          </Nav.Item>
          <Link href="/athletes" passHref>
            <Nav.Link>Athletes</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
