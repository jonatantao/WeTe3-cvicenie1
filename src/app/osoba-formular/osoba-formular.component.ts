import {Component, EventEmitter, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent{

  osoba: Osoba = {meno:"aaa", priezvisko:"bbb"};


  @Output()
  pridajOsobu = new EventEmitter<Osoba>();

  constructor() { }

  pridaj() {
    this.pridajOsobu.emit({meno:this.osoba.meno, priezvisko:this.osoba.priezvisko});
  }

}
