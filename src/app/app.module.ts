import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiMockService } from './services/api-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewDetailsComponent,
    EditDetailsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // REmove below line when the live api is available
    // InMemoryWebApiModule.forRoot(ApiMockService,{dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
