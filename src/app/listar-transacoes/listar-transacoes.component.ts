import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CurrencyPipe } from '../currency.pipe';
import { UppercasePipe } from '../uppercase.pipe';
import { LowercasePipe } from '../lowercase.pipe';
import { DataPipe } from '../data.pipe';
import { EmailPipe } from '../email.pipe';

@Component({
  selector: 'app-listar-transacoes',
  standalone: true,
  imports: [
    CurrencyPipe, UppercasePipe, LowercasePipe, DataPipe,
    EmailPipe, NgStyle, NgIf, NgFor, RouterLink],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  // ISSO É INTERPOLAÇÃO DE VARIAVEIS
  public nome = 'Wanderson';
  public sobrenome = 'Santos'

  public boasVindas() {
    return `Olá ${this.nome} ${this.sobrenome}, seja bem vindo!`;
  }

  public titulo = 'Controle Financeiro';


  // ISSO É UMA INTERPOLAÇÃO USANDO RETORNO DE UMA FUNÇÃO
  public receitas = 2000;
  public despesas = 5000;

  public saldo() {
    return this.receitas - this.despesas
  }

  public tipoSaldo() {
    let classSaldo = this.saldo() > 0 ? 'saldo-positivo' : 'saldo-negativo'
    return classSaldo;
  }

  public date = new Date();
  public usuario = 'Wanderson.Santos';

  // LISTA DE TRANSAÇÕES
  public transacoes = [
    {
      'id': 1,
      'descricao': 'Recebimento de Salário',
      'tipo': 'receita',
      'valor': 8000,
      'data': new Date()
    },
    {
      'id': 2,
      'descricao': 'Pagamento de Aluguel',
      'tipo': 'despesa',
      'valor': 2000,
      'data': new Date()
    },
    {
      'id': 3,
      'descricao': 'Pagamento de Carro',
      'tipo': 'despesa',
      'valor': 1500,
      'data': new Date()
    },
    {
      'id': 4,
      'descricao': 'Seguro do Carro',
      'tipo': 'despesa',
      'valor': 250,
      'data': new Date()
    },
    {
      'id': 5,
      'descricao': 'Conta de Luz',
      'tipo': 'despesa',
      'valor': 200,
      'data': new Date()
    },
    {
      'id': 6,
      'descricao': 'Conta de Internet',
      'tipo': 'despesa',
      'valor': 120,
      'data': new Date()
    },
    {
      'id': 7,
      'descricao': 'Recebimento de Horas Extras',
      'tipo': 'receita',
      'valor': 300,
      'data': new Date()
    },
    {
      'id': 8,
      'descricao': 'Recebimento de Comissão',
      'tipo': 'receita',
      'valor': 900,
      'data': new Date()
    },
  ];
}
