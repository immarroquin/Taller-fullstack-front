import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getUsuarios() {
    return this.httpClient.get(`${environment.url}/usuarios1`, {
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Accept': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
