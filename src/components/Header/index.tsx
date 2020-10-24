import React, { useCallback } from 'react';

import { Container, Button } from './styles';

import logo from '../../assets/logo.png';
import { useHistory} from 'react-router-dom';

const Header: React.FC = () => {

  const history = useHistory();

  const handleNavigation = useCallback((route: string) => {
    history.push(route);
  }, [history]);

  return (
      <Container>
            <img src={logo} />

          <div>
          <Button onClick={() =>  history.push('/')}>Desafio 1</Button>
          <Button onClick={() =>  history.push('/teste2')}>Desafio 2</Button>
          <Button onClick={() => handleNavigation('/teste3')} >Desafio 3</Button>
          </div>
      </Container>
  );
}

export default Header;