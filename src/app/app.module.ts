import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { MissionTileComponent } from './components/mission-tile/mission-tile.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { ApiCallsService } from './shared/api-calls.service';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MissionTileComponent,
    CardContainerComponent,
    FilterBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ApiCallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
