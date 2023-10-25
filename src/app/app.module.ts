import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pro1Component } from './Tailwind-project/pro1/pro1.component';
import { Website1Component } from './Website/website1/website1.component';
import { Website2Component } from './Website/website2/website2.component';
import { PropertiesComponent } from './Website/properties/properties.component';
import { Res1Component } from './Website/res1/res1.component';
import { Res2Component } from './Website/res2/res2.component';


@NgModule({
  declarations: [
    AppComponent,
    Pro1Component,
    Website1Component,
    Website2Component,
    PropertiesComponent,
    Res1Component,
    Res2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
