import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DetailComponent} from './detail/detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieReactiveFormComponent } from './movie-reactive-form/movie-reactive-form.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
