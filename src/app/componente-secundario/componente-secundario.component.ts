import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-secundario',
  templateUrl: './componente-secundario.component.html',
  styleUrls: ['./componente-secundario.component.css']
})
export class ComponenteSecundarioComponent {
  @Input() sobrenomeSec = "";

  nome = "";
}
