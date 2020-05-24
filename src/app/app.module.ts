import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { AboutComponent } from './about/about.component';
import { OopsComponent } from './oops/oops.component';
import { HomeComponent } from './home/home.component';
import { AlertifyService } from '../app/_services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    AboutComponent,
    OopsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
