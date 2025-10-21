import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,IonToolbar, 
  IonTitle, IonContent,
  IonList, IonItem,
  IonLabel, IonItemDivider
} from '@ionic/angular/standalone';
import { LoadingController, ViewWillEnter } from '@ionic/angular';
import { Personaje } from '../../interfaces/personaje.interface';
import { PersonajeService } from '../../services/personaje';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonItemDivider],
})
export class ListaPersonajesComponent implements ViewWillEnter {
  personajesFull: Personaje[] = [];

  constructor(
    private personajeService: PersonajeService,
    private router: Router,
    private loadingCtrl: LoadingController 
  ) {}

  async ionViewWillEnter() {
    await this.showLoading();
    await this.cargarPersonajes(); 
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando personajes...',
      spinner: 'crescent', // otros: 'lines', 'crescent', 'circles'
      duration: 1500 // opcional (se cierra solo después de 1.5s)
    });
    await loading.present();

    await new Promise(resolve => setTimeout(resolve, 1200));
    await loading.dismiss();
  }

  private async cargarPersonajes() {
    this.personajesFull = [];
    const basicos = this.personajeService.getPersonajes();
    for (let i = 0; i < basicos.length; i++) {
      const p = this.personajeService.getPersonaje(i);
      if (p) this.personajesFull.push(p);
    }
  }

  goToDetalle(index: number) {
    this.router.navigate(['/detalle', index]);
  }
}
