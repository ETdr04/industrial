import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerOperacao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Operacao = styled.div`
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

export const NovoCartao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;

  button {
    height: 55px;
    padding: 0 20px;
    margin: 10px;
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
