import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SearchComponent } from './search/search.component';
import {BooksService} from './services/books.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CountriesService} from './services/countries.service';
import {CompaniesService} from './services/companies.service';
import {CitiesService} from './services/cities.service';
import {FormatsService} from './services/formats.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavigationComponent,
    ShowcaseComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BooksService,
    CountriesService,
    CompaniesService,
    CitiesService,
    FormatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
