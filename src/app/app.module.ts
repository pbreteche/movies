import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {DetailComponent} from './detail/detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieReactiveFormComponent } from './movie-reactive-form/movie-reactive-form.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {RouterModule} from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MovieRepository} from './model/movie-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MovieFormComponent,
    MovieReactiveFormComponent,
    DashboardComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent},
      { path: 'catalog', component: CatalogComponent},
      { path: 'catalog/:id', component: DetailComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ])
  ],
  providers: [
    MovieRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
