import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';        // <- nuevo
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonInput, IonButton,
    FormsModule,          // habilita [(ngModel)]
    RouterLink,           // <- sin esto, routerLink no hace nada
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