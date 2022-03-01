import { Component } from '@angular/core';
import {Osoba} from "./models/osoba.model";

enum MENU { OSOBY, KNIHY, VYPOZICKY}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvicenia wete';

  osoby: Osoba[] = []

  menu = MENU;
  aktMenu: MENU = MENU.OSOBY;

  otvorMenu(m: MENU) {
    this.aktMenu = m;
  }

}
