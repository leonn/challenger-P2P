import React, { useState, useEffect, useCallback } from 'react';

import { Container, Content } from './styles';

import CardTalks from '../../components/CardTalks';

import dataTalks from '../../utils/dataTask2';

interface TalkInterface {
  name: string;
  hours: string
};

const Teste2: React.FC = () => {

const [talks, setTaks] = useState<TalkInterface[]>([]);
const [lastTime, setLastTime] = useState('');

useEffect(() => {
  dataTalks.sort(function (a, b) {
    return (a.hours < b.hours) ? 1 : ((b.hours > a.hours) ? -1 : 0);
  });

  let quantityHours = 0;

  let talksFinal: TalkInterface[] = [];

  dataTalks.forEach(item => {

    setLastTime(convertMinnuteToHours(quantityHours + 30));
  if (quantityHours < 180) {
      quantityHours += item.hours;
      talksFinal.push({ hours: convertMinnuteToHours(quantityHours), name: item.name });
  }

  if (quantityHours === 180) {
    quantityHours+= 60;
    talksFinal.push({ hours: convertMinnuteToHours(quantityHours), name: 'Hora do almoço' });
};

if (quantityHours < 450) {
  quantityHours += item.hours;
  talksFinal.push({ hours: convertMinnuteToHours(quantityHours), name: item.name });
}

})

  setTaks([...talksFinal]);
}, []);


const convertMinnuteToHours = (minnute: number) => {
  let min = minnute / 60 + 8

  const formated =(min + '').split('.');

  if (formated.length > 1) {
    switch (formated[1]) {
      case '5':
        return `${formated[0]}:30`;
      break;
      case '75':
        return `${formated[0]}:45`;
      break;
    }
  };

  return `${min}:00`;

};

  return (
    <Container>
      <h1>Teste 2 - gerenciamento de trilha de conferência</h1>
      <Content>
        <h2>A conferência começas as 9Horas</h2>
        {talks.map(item => (
          <CardTalks hours={item.hours} label={item.name} />
        ))}

      <CardTalks hours={lastTime} label={'evento de networking'} />
      </Content>
    </Container>
  )
}

export default Teste2;
