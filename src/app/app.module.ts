import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing/routing.module';
import { HttpClient } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { GithubService } from './github-services/github.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClient,
    FormsModule
    
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
