import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-transacoes',
  standalone: true,
  imports: [],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  // ISSO É INTERPOLAÇÃO DE VARIAVEIS
  public nome = 'Wanderson';
  public titulo = 'Controle financeiro';
  public boasVindas = 'Olá ' + this.nome + ", Bem vindo(a) ao nosso sistema!";

  // ISSO É UMA INTERPOLAÇÃO USANDO RETORNO DE UMA FUNÇÃO
  public receitas = 2000;
  public despesas = 500;

  public saldo(){
    return this.receitas - this.despesas
  }
}
