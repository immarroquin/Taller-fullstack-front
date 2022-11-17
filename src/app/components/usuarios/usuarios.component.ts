import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService : UsuariosService) { }
  ngOnInit(): void {
    this.listUsuarios()
  }

  listUsuarios() { 
    this.usuariosService.getUsuarios().subscribe((data) => {
      console.log(data);
    });
  }

}
