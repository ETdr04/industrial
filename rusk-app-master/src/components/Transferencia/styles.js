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

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0 30px 0 10px;
    width: 100%;

    border: 1px solid #BABABA;
    border-radius: 3px;
    line-height: 36px;
    height: 36px;
    background: #fff;
    margin: 0 5px 5px 0;
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
