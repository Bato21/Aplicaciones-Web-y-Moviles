import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';        // <- nuevo
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonButton, IonIcon,
} from '@ionic/angular';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton, IonIcon,
    RouterLink,   // los del botón atrás
  ],
})
export class AcercaPage {

}