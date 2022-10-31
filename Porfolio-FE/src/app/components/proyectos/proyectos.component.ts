import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoServiceService } from 'src/app/service/sproyecto-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  pro: Proyecto[] = [];

  constructor(private sProyecto: SProyectoServiceService, private tokenService: TokenService) { }

  isAdmin= this.tokenService.isAdmin();

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto():void{
    this.sProyecto.lista().subscribe(data => {this.pro = data;})
  }

  delete (id?:number){

    if(id!= undefined){
      this.sProyecto.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }

  }
}