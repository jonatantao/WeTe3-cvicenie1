import { Component } from '@angular/core';

enum MENU { OSOBY, KNIHY, VYPOZICKY}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvicenie1';

  osoby: any = [];
  osoba = {meno:"aaa", priezvisko:"bbb"};

  zakaz = false;

  menu = MENU;
  aktMenu: MENU = MENU.OSOBY;

  otvorMenu(m: MENU){
    this.aktMenu = m;
  }

  public pridaj(): void{
    this.osoby.push({meno: this.osoba.meno, priezvisko: this.osoba.priezvisko});
  }

  public test(): void {
    if (!this.zakaz) {
      this.zakaz = true;
    } else {
      this.zakaz = true;
    }
  }
}
