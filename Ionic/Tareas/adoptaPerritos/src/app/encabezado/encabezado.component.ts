import { Component, Input } from '@angular/core';
import {
  IonToolbar, IonTitle,
  IonButtons, IonBackButton, IonHeader
} from '@ionic/angular/standalone';

 
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle,
    IonButtons, IonBackButton
  ],
})
export class EncabezadoComponent {
  @Input() titulo = 'Mi App';   // lo que dirá la barra
  @Input() volverA?: string;    // si llega, muestra el botón atrás
  @Input() mostrarAcerca?: string; // si llega, muestra el botón Acerca de
  @Input() color = 'primary';  // color de la barra
  @Input() subtitulo?: string;  // si llega, se muestra debajo del título
}