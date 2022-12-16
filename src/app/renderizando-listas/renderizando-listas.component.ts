import { Component } from '@angular/core';
import { Celular } from '../type/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [
    {id: 1, nome: "Celular xpto", esgotado: false },
    {id: 2, nome: "Celular xuxa", descricao: "Um celular para os baixinhos", esgotado: true },
    {id: 3, nome: "Celular angélica", descricao: "Um celular para quem não gosta da xuxa", esgotado: false }
  ]

}
