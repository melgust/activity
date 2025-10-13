import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { LatestCatsModule } from './components/latest-cats/latest-cats.module';
import { SoccerComponent } from './pages/soccer/soccer.component';
import { BasketballComponent } from './pages/basketball/basketball.component';
import { ChessComponent } from './pages/chess/chess.component';
import { StandComponent } from './pages/stand/stand.component';
import { OthersComponent } from './pages/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessComponent,
    StandComponent,
    OthersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    LatestCatsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
