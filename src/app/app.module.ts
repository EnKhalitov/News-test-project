import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }  from '@angular/material/icon';
import { MatMenuModule }  from '@angular/material/menu';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatPaginatorModule }  from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http"
import { NewsService } from "./services/news.service";
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { Approutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCardModule,
    HttpClientModule,
    Approutes,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }