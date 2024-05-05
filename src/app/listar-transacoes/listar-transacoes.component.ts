import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-transacoes',
  standalone: true,
  imports: [],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  public nome= 'Wanderson';
  public titulo= 'Controle financeiro';
  public boasVindas= 'Olá ' + this.nome + ", Bem vindo(a) ao nosso sistema!";
}
