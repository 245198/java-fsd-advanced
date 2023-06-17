import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { CalComponent } from './cal/cal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOutputComponent,
    CalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
