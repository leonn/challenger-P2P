import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #fff;
        font-size: 40px;
        margin-bottom: 30px;
        text-align: center;
    }
`;

export const Content = styled.div`
    width: 45%;
    height: 50%;
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
    overflow: scroll;
    min-width: 400px;
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

    p {
        font-size: 18px;
        color: #444;
    }

    h2 {
        align-self: center;
        text-align: center;
        font-size: 30px;
        color: #444;
        margin-bottom: 30px;
    }
`;

