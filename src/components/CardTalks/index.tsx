import React from 'react';

import { Container } from './styles';

import { BsFillClockFill } from 'react-icons/bs';

interface PropsCardTalks {
    hours: string;
    label: string;
};

const CardTalks: React.FC<PropsCardTalks> = ({ hours, label }) => {
  return (
      <Container>
          <p>{hours}</p>
         <BsFillClockFill 
            size={24}
            color="#444"
         />

         <span>{`- ${label}`}</span>         
      </Container>
  );
}

export default CardTalks;