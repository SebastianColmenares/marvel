import { Routes } from '@angular/router';
import { ListaPersonajesComponent } from './pages/lista-personajes/lista-personajes.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'lista-personajes',
    pathMatch: 'full',
    component: ListaPersonajesComponent,
  },
];
