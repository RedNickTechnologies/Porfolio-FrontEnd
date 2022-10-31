import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { SContactoService } from 'src/app/service/scontacto.service';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './edit-contacto.component.html',
  styleUrls: ['./edit-contacto.component.css']
})
export class EditContactoComponent implements OnInit {
  contacto: Contacto = null;


  constructor(
    private sContacto: SContactoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  )
  
  { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.sContacto.details(id).subscribe(
      data =>{
        this.contacto = data;
      }, err=>{
        alert("Error al modificar");
        this.router.navigate([''])
      }

    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sContacto.update(id, this.contacto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }


}
