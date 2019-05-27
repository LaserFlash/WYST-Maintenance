import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  {
    path: 'stats',
    loadChildren: './stats-area/stats-area.module#StatsAreaModule'
  },
  {
    path: 'docs',
    loadChildren: './document-area/document-area.module#DocumentAreaModule'
  },
  {
    path: 'view',
    loadChildren: './viewing-area/viewing-area.module#ViewingAreaModule'
  },
  {
    path: 'report',
    loadChildren: './report-area/report-area.module#ReportAreaModule'
  },
  {
    path: 'admin',
    loadChildren: './admin-area/admin-area.module#AdminAreaModule'
  },
  {
    path: '**', redirectTo: 'report'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
