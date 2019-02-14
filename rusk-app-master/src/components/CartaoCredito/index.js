import React, { Component } from 'react';
import { Container, Form } from './styles';
import Modal from 'react-responsive-modal';
import api from '../../services/api';

export default class CartaoCredito extends Component {
  state = {
    open: false,
    limite: '',
    cartao: '',
    fatura: '',
    bandeira: 'Visa',
    vencimento: '10/25',
    numero: '371823',
    id_cliente_cc: '1',
  };

  getCartao = async () => {
    await api.get('card/1')
    .then(response => {
      if (response.data[0]) {
        this.setState({
          limite: response.data[0].limite,
          fatura: response.data[0].fatura,
          bandeira: response.data[0].bandeira,
          vencimento: response.data[0].vencimento,
          numero: response.data[0].numero,
          cartao: response.data[0]
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  gerarCartao = async () => {
    await api.post('card', this.state)
    .then(response => {
      this.onCloseModal();
      alert('Cartão gerado com sucesso!');
    })
    .catch(error => {
      this.onCloseModal();
      alert('Erro ao gerar cartão: ' + error);
    });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleCartaoCredito = async () => {
    await this.getCartao();
    this.onOpenModal();
  }

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  removerCartao = async () => {
    await api.delete('card/'+ this.state.cartao.id)
    .then(response => {
      this.setState({ cartao: [], limite: '' });
      alert('Cartão removido');
      this.onCloseModal();
    });
  }

  render(){
    const { open } = this.state;
    return (
      <Container onClick={() => this.handleCartaoCredito()}>
        <label>Cartão de Crédito</label>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Cartão de Crédito</h2>
          { this.state.cartao.id
          ? <Form>
            <h4>Número: {this.state.numero}</h4>
            <h4>Bandeira: {this.state.bandeira}</h4>
            <h4>vencimento: {this.state.vencimento}</h4>
            <h4>Fatura: {this.state.fatura}</h4>
            <h4>Limite: {this.state.limite}</h4>
            <button onClick={() => {this.removerCartao()}}>Remover Cartão</button>
          </Form>
          : <div>
              <label>Limite do cartão:</label>
              <Form>
                <input type="number" name="limite" value={this.state.limite} onChange={this.handleInputChange} />
                <button onClick={() => { this.gerarCartao()}}>Gerar Cartão</button>
              </Form>
            </div>
          }
          <label>*Pressione ESC para sair</label>
        </Modal>
      </Container>
    );
  }
};
