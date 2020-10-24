import React, { useState, useCallback } from 'react';

import { Container, Content, List, ViewDetails } from './styles';

import { dataQuestions, values } from './data';

import { AiOutlineArrowLeft } from 'react-icons/ai';

interface Route {
  label: string;
  routes: Array<string>
};

const Teste1: React.FC = () => {

  const [routeSelected, setRouteSelected] = useState<Route | null>(null);
  const [total, setTotal] = useState(0);

  const handleCalcRoute = useCallback(({ label, routes } : Route) => {

    setRouteSelected({
      label,
      routes
    });

    let valueTotal = 0;
    let aux = '';

    for(let x = 0; x <= routes.length; x ++) {
      aux += routes[x];

      if (aux.length === 2) {
        const route = values.filter(item => item.id === aux);

        if (route.length !== 0) {
          valueTotal += route[0].value;
        
          aux = aux[1];

          continue;
        };
        break;
      };
    };
    
    setTotal(valueTotal);
  }, [values]);

  return (
      <Container>
          <h1>Teste 1 - Trens</h1>
          <Content>
            {!routeSelected && (
              <>
                <h2>Escolha uma rota para saber mais</h2>
                <List>
                  {dataQuestions.map(item => (
                    <button onClick={() => handleCalcRoute(item)}>
                      {item.label}
                    </button>
                  ))}
                </List>
              </>
            )}

          {routeSelected && (
            <ViewDetails>
              <button onClick={() => setRouteSelected(null)}>
                <AiOutlineArrowLeft size={50} color="#c31432" />
              </button>
              <h2>{`Rota de ${routeSelected.label}`}</h2>

              <p>A distancia a ser percorrida nessa rota é de {total}</p>
            </ViewDetails>
          )}

          </Content>
      </Container>
  );
}

export default Teste1;