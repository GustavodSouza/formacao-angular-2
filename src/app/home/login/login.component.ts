import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario = '';
  public senha = '';

  constructor(
    private authService: AutenticacaoService,
  ) { }

  public login(): void {
    this.authService.autenticar(this.usuario, this.senha);
  }

}
