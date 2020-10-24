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
        text-align: center;
        margin-bottom: 20px;
        color: #444;
        font-size: 22px;
    }

    h2 {
        align-self: center;
        text-align: center;
        font-size: 30px;
        color: #444;
        margin-bottom: 30px;
    }

    input {
        width: 100%;
        padding: 8px 10px;
        height: 60px;
        font-size: 24px;
        color: #444;
        border: 1px solid #4444;
        border-radius: 10px
    }

    h3 {
        text-align: center;
        margin-top: 50px;
        font-size: 24px;
        color: #444;
    }
`;

