import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';        // <- nuevo
import { EncabezadoComponent } from '../encabezado/encabezado.component';  // <- nuevo
import {
  IonContent,
  IonButton,
} from '@ionic/angular';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
  imports: [
    IonContent,
    IonButton,
    RouterLink,   // los del botón atrás
    EncabezadoComponent,  // el encabezado
  ],
})
export class AcercaPage {

}