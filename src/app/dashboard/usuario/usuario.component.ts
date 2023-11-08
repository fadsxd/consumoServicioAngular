import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  id:number|null;


  firstName: string;
  email: string;
  gender: string;
  status: string;
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauYrIE_oA3N8T4GSN6XguNbI4s776vKLPFw&usqp=CAU';
  loading = true;


  constructor(private aRoute: ActivatedRoute, private _usuarioService: UsuarioService){
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.firstName = '';
    this.email = '';
    this.gender = '';
    this.status = '';
    
  }

  ngOnInit():void{
    console.log(this.id);
    this.getUsuario();
    
  }
  getUsuario():void{
    this._usuarioService.getUsuario(Number(this.id)).subscribe(data =>{
      this.firstName = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.status = data.status;
      this.loading = false;
    });
  }

}
