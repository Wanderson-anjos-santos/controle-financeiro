import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UppercasePipe } from '../uppercase.pipe';
import { EmailPipe } from '../email.pipe';

@Component({
  selector: 'app-adicionar-transacao',
  standalone: true,
  imports: [FormsModule, RouterLink, UppercasePipe, EmailPipe],
  templateUrl: './adicionar-transacao.component.html',
  styleUrl: './adicionar-transacao.component.scss'
})
export class AdicionarTransacaoComponent {
  public titulo = 'Controle Financeiro'
  public usuario = 'roodsevelt.santos'

  // EVENT BINDING
  public transacaoAdicionada!: string;

  public adicionarTransacao() {
    return this.transacaoAdicionada = 'Transação adicionada com sucesso!'
  }

  // 2WAY BINDING
  public valorTransacao!: number;
}
