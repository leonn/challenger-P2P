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
    display: flex;
    flex-direction: column;


    h2 {
        align-self: center;
        text-align: center;
        font-size: 30px;
        color: #444;
        margin-bottom: 30px;
    }
`;

export const List = styled.div`
    flex: 1;
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 40%;
    grid-gap: 10px;

    button {
        border-radius: 10px;
        color: #444;
        font-size: 20px;
        overflow: hidden;
        text-align: center;
        box-shadow: 3px 2px 5px;
        cursor: pointer;
        transition: all 0.45s;

        &:hover {
            background-color: #c31432;
            color: #fff;
            transform: translateY(-6%);
        }

    }
`;

export const ViewDetails = styled.div`
    flex: 1;
    
    h2 {
        color: #444;
    }

    p {
        text-align: center;
        color: #444;
        font-size: 26px;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }
`;