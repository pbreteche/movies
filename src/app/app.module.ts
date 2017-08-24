import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DetailComponent} from './detail/detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieReactiveFormComponent } from './movie-reactive-form/movie-reactive-form.component';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MovieFormComponent,
    MovieReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
