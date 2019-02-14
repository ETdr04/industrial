import styled from 'styled-components';

export const Form = styled.div`
  input{
    display: block;
    font-size: 1.2em;
    padding: 0.25em;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #BABABA;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-top: 10px;
    background: #61D095;
    color: #ffffff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #A6D49F;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #31684A;
  width: 150px;
  height: 150px;
  margin: 15px;
  padding: 20px;
  justify-content: center;
  border-radius: 3px;

  &:hover {
    background: #A6D49F;
    cursor: pointer;
    width: 170px;
    height: 170px;
  }

  label {
    color: #fff;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
`;
