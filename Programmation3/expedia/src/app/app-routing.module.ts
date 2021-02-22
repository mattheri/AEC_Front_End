import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { TripsComponent } from './trips/trips.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path: '', component: TripsComponent },
  {
    path: 'administration',
    component: AdministrationComponent,
    children: [
      { path: 'panel', component: AdministrationComponent },
      { path: 'graph', component: GraphComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
