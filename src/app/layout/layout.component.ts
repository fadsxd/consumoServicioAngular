import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private rotuer: Router){}

  irDashboard():void{
    //TODO - GUARDAMOS LOS DATOS EN EL FORMULARIO O HACEMOS UNA LOGICA
    //TODO - REDIRECCIONAMOS
    this.rotuer.navigate(['/dashboard']);
  }

}
