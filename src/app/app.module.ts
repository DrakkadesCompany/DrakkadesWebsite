import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrakkadesComponent } from './drakkades/drakkades.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DrakkadesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
