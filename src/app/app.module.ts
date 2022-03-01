import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobyZoznamComponent } from './osoby-zoznam/osoby-zoznam.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobyZoznamComponent
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
