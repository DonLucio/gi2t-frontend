import { Routes } from '@angular/router';
import { Publicaciones } from './pages/publicaciones/publicaciones';
import { Home } from './pages/home/home';
import { Semilleros } from './pages/semilleros/semilleros';
import { Investigadores } from './pages/investigadores/investigadores';
import { Eventos } from './pages/eventos/eventos';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'semilleros', component: Semilleros },
  { path: 'investigadores', component: Investigadores },
  { path: 'publicaciones', component: Publicaciones },
  { path: 'eventos', component: Eventos },

  // Ruta de detalle (CRÍTICA para Google Scholar)
  // Al entrar aquí, el servidor generará el meta-tag específico del artículo
  { path: 'publicaciones/:id', component: Publicaciones },

  // Redirección inicial
  //{ path: '**', redirectTo: '/home' }
];
