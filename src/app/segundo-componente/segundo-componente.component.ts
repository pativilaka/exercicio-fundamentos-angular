import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Patrícia Nunes";
  dataNascimento = "1982-02-16";
  urlImagem = "/assets/patiVilaka.png";

  mostrarDataNascimento(){
    alert(`A data de nascimento da Pati é: ${this.dataNascimento}`);
  }
}
