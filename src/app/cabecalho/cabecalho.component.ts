import { Component } from '@angular/core';
import { EmailPipe } from '../email.pipe';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [EmailPipe],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  public titulo = 'Controle Financeiro';
  public usuario = 'roosevelt.Santos';
}
