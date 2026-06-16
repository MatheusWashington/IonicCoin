import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then(m => m.HomePage),
      },
      {
        path: 'historico',
        loadComponent: () =>
          import('../historico/historico.page').then(m => m.HistoricoPage),
      },
      {
        path: 'configuracoes',
        loadComponent: () =>
          import('../configuracoes/configuracoes.page').then(m => m.ConfiguracoesPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];