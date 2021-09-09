import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['edad', 'nombre', 'peso', 'telefono'];

  datos: Persona[] = [];

  personaselect: Persona = new Persona("", "","","");

  @ViewChild(MatTable)
  tabla1!: MatTable<Persona>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Persona(this.personaselect.edad, this.personaselect.nombre, this.personaselect.peso, this.personaselect.telefono));
    this.tabla1.renderRows();
    this.personaselect = new Persona("","","","");
  }
}


export class Persona {
  constructor(public edad: string, public nombre: string, public peso: string, public telefono: string) {
  }
}