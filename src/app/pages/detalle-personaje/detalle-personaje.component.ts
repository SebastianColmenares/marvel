import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonButtons, IonBackButton
} from '@ionic/angular/standalone';

import { Personaje } from '../../interfaces/personaje.interface';
import { PersonajeService } from '../../services/personaje';

@Component({
  selector: 'app-detalle-personaje',
  standalone: true,
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonButtons, IonBackButton
  ],
})
export class DetallePersonajeComponent implements OnInit {
  personaje?: Personaje; // Usamos tu interfaz

  constructor(
    private route: ActivatedRoute,
    private personajeService: PersonajeService
  ) {}

  ngOnInit(): void {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    const p = this.personajeService.getPersonaje(index);
    this.personaje = p; // puede ser undefined si el índice es inválido
  }
}
