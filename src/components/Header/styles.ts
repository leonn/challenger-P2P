import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  background-color: #444;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;


  div {
    display: flex;
  };
`;

export const Button = styled.button`
    background: transparent;
    margin-right: 20px;
    border: none;
    color: #fff;
    font-size: 25px;
    transition: color 0.4s;

    &:hover {
        color: #aaa;
    }
`;
