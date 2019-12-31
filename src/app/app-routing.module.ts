import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersOverviewComponent } from './players-overview/players-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CreateNewPlayerComponent} from './create-new-player/create-new-player.component';


const routes: Routes = [
  { path: 'uebersicht', component: PlayersOverviewComponent },
  { path: 'create-new-player', component: CreateNewPlayerComponent },
  { path: '', redirectTo: 'uebersicht', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
