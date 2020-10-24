import React, { useState } from 'react';

import { Container, Content } from './styles';


const Teste3: React.FC = () => {

  const stringValid = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  const tabValue = [
    {
      id: 'I',
      value: 1,
    },
    {
      id: 'V',
      value: 5,
    },
    {
      id: 'X',
      value: 10,
    },
    {
      id: 'L',
      value: 100,
    },
    {
      id: 'D',
      value: 500,
    },
    {
      id: 'M',
      value: 1000,
    }
  ];

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [convert, setConvert] = useState(0);

  const handleConvert = (text: string) =>{
    setError(false);

    text = text.toUpperCase();
    console.log(text);

    for (let x = 0; x <= text.length; x ++) {
      if (!stringValid.includes(text[x])) {
        alert(text[x])
        setError(true);
        return;
      }

      const value = tabValue.filter(item => item.id === text[x]);

      setConvert(convert + value[0].value);

    };

    setValue('Leandro');
    

  };

  return (
      <Container>
          <h1>Teste 3 - guia do comerciante para a galáxia</h1>
          <Content>
            <h2>Tabelas de preço, escolha os produtos e veja seus preços</h2>
            
            <p>I = 1 - V = 5 - X = 10 - L = 100 - D = 500 - M = 1000</p>

            <input 
            value={value}
            onChange={e => handleConvert(e.target.value)}
            placeholder="Digite o valor para realizar a conversão X,V,L..." />

            <h3>{convert}</h3>

          </Content>
      </Container>
  );
}

export default Teste3;