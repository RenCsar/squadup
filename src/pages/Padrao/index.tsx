import { Outlet } from 'react-router';
import Header from '../../components/ui/Header';
import { Container } from './PaginaPadrao.Styled';

const DefaultPage = () => {
  return (
    <Container>
        <Header />
        <Outlet />
    </Container>
  )
}

export default DefaultPage;