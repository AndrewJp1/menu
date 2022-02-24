import { Component, OnInit } from '@angular/core';
import { DatoService } from 'src/app/services/dato/dato.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dato: any = []; //DATOS DEL JSON
  show_A: boolean = false; //BANDERA length > 2
  show_B: boolean = false; //BANDERA length == 2
  constructor(
    private ServDato: DatoService
  ) {
  }

  ngOnInit(): void {
    this.ServDato.get().subscribe(res => {
      this.dato = res;

      const valor = this.dato?.menus[0][1].length; //SABER SI HAY +1 CURSO

      if (valor == 2 ) {
        this.show_A = false;
        this.show_B = true;
      } if (valor > 2){
        this.show_A = true;
        this.show_B = false;
      }

      console.log(this.dato);
    })
  }

}
