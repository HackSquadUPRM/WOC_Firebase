import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './components/app.component';
import { AboutMeComponent } from './components/aboutMe.component';

import { routing } from '../app.routing';

@NgModule({
  imports:      [ BrowserModule,
                 routing
                ],
  declarations: [ AppComponent,
                  AboutMeComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

