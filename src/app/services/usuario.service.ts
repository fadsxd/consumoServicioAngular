import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public/v2/users';
  token ='707dcc6eb8d531774d4a0143d95b9c9a328a0fd5ba34793b5238fb65430e73e7';
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url+'?access-token='+this.token);
  }

  getUsuario(id:number):Observable<any>{
    return this.http.get<any>(this.url+'/'+id+'?access-token='+this.token)
  }
}
