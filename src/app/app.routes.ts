import { Routes } from '@angular/router';
import { ListaPersonajesComponent } from './pages/lista-personajes/lista-personajes.component';
import { DetallePersonajeComponent } from './pages/detalle-personaje/detalle-personaje.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaPersonajesComponent },
  { path: 'detalle/:index', component: DetallePersonajeComponent },
  { path: '**', redirectTo: 'lista' }
];
