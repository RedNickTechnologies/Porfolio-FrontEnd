import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';
import { SContactoService } from 'src/app/service/scontacto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto:Contacto[] = [];

  constructor(private sContacto: SContactoService, private tokenService: TokenService) { }

  isLogged = this.tokenService.isLogged();
  isAdmin= this.tokenService.isAdmin();

  ngOnInit(): void {
    this.cargarContacto();
  }

  cargarContacto():void{
    this.sContacto.lista().subscribe(
      data =>{
        this.contacto= data;
      }
    )
    
  }

  borrar(id?:number){
    if(id!= undefined){
      this.sContacto.delete(id).subscribe(
        data => {
          this.cargarContacto();
        }, err => {
          alert("No se pudo eliminar")
        }
        
      )
    }
  }


}
