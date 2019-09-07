import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)},
    {path: 'issues-search', loadChildren: () => import('./modules/issues-search/issues-search.module').then((m) => m.IssuesSearchModule)}
];
