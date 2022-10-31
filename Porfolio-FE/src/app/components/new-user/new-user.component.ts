import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  nombre: string;
  nombreUsuario: string;
  password: string;
  email: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    const newUserModel : NuevoUsuario={
      email:this.email,
      nombre:this.nombre,
      password:this.password,
      nombreUsuario:this.nombreUsuario,
    }

    this.authService.nuevo(newUserModel).subscribe(
      {next: result => {console.log(result); this.router.navigate([''])},
      error: (error: HttpErrorResponse) => alert(error)
    }
    )



  }


}
