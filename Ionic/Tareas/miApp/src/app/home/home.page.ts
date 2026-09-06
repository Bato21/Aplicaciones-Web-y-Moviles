import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';        // <- nuevo
import { EncabezadoComponent } from '../encabezado/encabezado.component';  // <- nuevo
import {
  IonContent,
  IonItem, IonInput, IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonItem, IonInput, IonButton,
    FormsModule,          // habilita [(ngModel)]
    RouterLink,           // <- sin esto, routerLink no hace nada
    RouterOutlet,         // <- para mostrar las rutas hijas
    EncabezadoComponent,  // el encabezado
  ],
})
export class HomePage {
  nombre = '';
  ciudad = '';
  saludo = '';
  yaSaludo = false;

  saludar() {
    this.saludo = this.nombre && this.ciudad
      ? `¡Hola, ${this.nombre} desde ${this.ciudad}!`
      : '';
    this.yaSaludo = true;
  }
}