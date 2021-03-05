import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { TripsComponent } from './trips/trips.component';
import { GraphComponent } from './graph/graph.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: TripsComponent },
  {
    path: 'administration',
    component: AdminComponent,
    children: [
      { path: 'panel', component: AdministrationComponent },
      { path: 'graph', component: GraphComponent },
    ],
  },
  { path: 'forfaits/:destination', component: TripsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
