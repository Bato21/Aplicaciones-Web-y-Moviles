import { Component, inject } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/angular/standalone';
import { EncabezadoComponent } from '../../encabezado/encabezado.component';
import { PerrosService, Perro } from '../../services/perros.service';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [IonContent, EncabezadoComponent, IonGrid, IonRow, IonCol],
})
export class GaleriaPage {
  private perrosService = inject(PerrosService);
  public perros: Perro[] = this.perrosService.todas();
}
