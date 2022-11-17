import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getUsuarios() {
    return this.httpClient.get(`${environment.url}/api/usuariosback`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  loguearUsuario() {
    return this.httpClient.post(`${environment.url}/api/login`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
