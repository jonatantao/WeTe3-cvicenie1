import {Component, Input} from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoby-zoznam',
  templateUrl: './osoby-zoznam.component.html',
  styleUrls: ['./osoby-zoznam.component.css']
})
export class OsobyZoznamComponent{

  @Input()
  osoby: Osoba[] = []

  constructor() { }
}
