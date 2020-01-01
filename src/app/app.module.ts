import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersOverviewComponent } from './players-overview/players-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateNewPlayerComponent } from './create-new-player/create-new-player.component';
import { NaviComponent } from './navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersOverviewComponent,
    PageNotFoundComponent,
    CreateNewPlayerComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
