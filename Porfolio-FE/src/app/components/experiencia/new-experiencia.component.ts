import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  id?: number;
  nombre: string ='';
  puesto: string ='';
  fecha: string ='';
  token!: string;

  constructor(private sExperiencia: SExperienciaService, private router: Router, private tokens: TokenService) {
    this.token=tokens.getToken();
   }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.nombre, this.puesto, this.fecha);
    this.sExperiencia.save(exp,this.token).subscribe(
      data=> {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
