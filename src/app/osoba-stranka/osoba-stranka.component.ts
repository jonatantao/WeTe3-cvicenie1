import { Component } from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent {

  osoby: Osoba[] = [];

  pridaj(o: Osoba){
    this.osoby.push(o)
  }

  constructor() { }

}
