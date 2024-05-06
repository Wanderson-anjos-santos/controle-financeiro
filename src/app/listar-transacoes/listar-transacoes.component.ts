import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

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
    EmailPipe, NgStyle, NgIf, NgFor],
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

  public titulo = 'Controle financeiro';


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

  public nomeTransacao = 'Pagamento Aluguel';
  public tipoTransacao = 'despesa';
  public valorTransacao = 5000;
  public dataTransacao = new Date();

  // LISTA DE TRANSAÇÕES
  public transacoes = [];
}
