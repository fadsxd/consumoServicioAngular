import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent {

  @Input() user: any;
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauYrIE_oA3N8T4GSN6XguNbI4s776vKLPFw&usqp=CAU';
  firstName:string;
  email:string;
  id: number;
  constructor(){
    this.firstName='';
    this.email='';
    this.id = 0;
  }

  ngOnInit():void{
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.imgUrl = this.imgUrl;
    this.id = this.user.id;
  }

}
