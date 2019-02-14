import React, { Component } from 'react';
import { Container, NovoCartao, ContainerOperacao } from './styles';
import api from '../../services/api';
import Transferencia from '../../components/Transferencia';
import Historico from '../../components/Historico';
import CartaoCredito from '../../components/CartaoCredito';
import Contato from '../../components/Contato';

export default class Main extends Component {
  state = {
    nome: '',
    saldo: '',
  };

  async componentDidMount() {
    await this.handleUser();
  }

  handleUser = async () => {
    await api.get('account/1')
    .then(response => {
      this.setState({ nome: response.data[0].nome, saldo: response.data[0].saldo });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      <Container>
        <h3>Bem vindo de volta!</h3>
        { this.state.saldo
          ? <h4>Seu saldo é de R$ {this.state.saldo}</h4>
          : <NovoCartao>
              <h4>Você ainda não possui um cartão, deseja criá-lo?</h4>
              <button>Criar Cartão</button>
            </NovoCartao>
        }
        <h3>O que você deseja fazer {this.state.nome}?</h3>
        <ContainerOperacao>

          <Transferencia />
          <CartaoCredito />
          <Historico />
          <Contato />
        </ContainerOperacao>
      </Container>
    );
  }
}
