import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvicenie1';

  vstup = "qwe";

  cena = 0;
  mnozstvo = 0;
  vysledok = 0;
  test = null;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup( {
      username: new FormControl(),
      password: new FormControl()
    })
  }

  public pracuj(){
    alert("hurá!");
  }

  public ukazTo(){
    alert("vstup" + this.vstup);
  }

  public spolu(){
    this.vysledok = this.cena * this.mnozstvo;
  }

  public prihlas(): void{
    alert("Pouzivatelske meno: "
      + this.form.value.username);
  }

  public disabled(): void{
    if ()
  }
}
