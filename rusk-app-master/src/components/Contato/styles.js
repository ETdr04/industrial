import styled from 'styled-components';

export const Table = styled.table`
  width: 250px;
  background: #68A357;
  border-radius: 3px;
  margin: 10px 10px;
  border-collapse: collapse;

  button {
    height: 25px;
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

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr {
    &:nth-child(2n - 1){
        background: #A6D49F;
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
