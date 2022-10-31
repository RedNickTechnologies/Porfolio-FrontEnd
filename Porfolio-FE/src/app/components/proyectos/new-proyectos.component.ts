import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoServiceService } from 'src/app/service/sproyecto-service.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  id?: number;
  nombre: string ='';
  url: string ='';
  desempenio: string ='';

  constructor(private sProyecto: SProyectoServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Proyecto(this.nombre, this.url, this.desempenio);
    this.sProyecto.save(exp).subscribe(
      data=> {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
