import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

  public cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>('http://localhost:3000/user/signup', novoUsuario);
  }

  public verificarUsuarioExistente(nomeUsuario: string): Observable<string> {
    return this.http.get<string>(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
