import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  percent = 90;
  columnas: string[] = ['edad', 'nombre', 'peso', 'telefono'];

  datos: Persona[] = [];

  personaselect: Persona = new Persona("", "","","");

  @ViewChild(MatTable)
  tabla1!: MatTable<Persona>;

<<<<<<< HEAD
 
=======
>>>>>>> 84a3425af78b4a3dc1c45612653d180d5fff15c8
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