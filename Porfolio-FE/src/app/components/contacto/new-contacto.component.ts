import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { SContactoService } from 'src/app/service/scontacto.service';

@Component({
  selector: 'app-new-contacto',
  templateUrl: './new-contacto.component.html',
  styleUrls: ['./new-contacto.component.css']
})
export class NewContactoComponent implements OnInit {

  nombre: string;
  email: string;
  mensaje: string;

  constructor(private sContacto: SContactoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const contacto = new Contacto(this.nombre, this.email, this.mensaje);
    this.sContacto.save(contacto).subscribe(
      data =>{
        alert("Contacto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


}
