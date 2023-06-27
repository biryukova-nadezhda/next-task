import RootProvider from './RootProvider';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
import Main from '@/components/Main/Main';

const Home: React.FC = () => {
  return (
    <RootProvider>
      <Container>
        <Header />
        <Main />
      </Container>
    </RootProvider>
  )
};

export default Home; 