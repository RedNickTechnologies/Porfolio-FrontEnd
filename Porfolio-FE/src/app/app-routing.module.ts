import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< Updated upstream
/* aca se colocan las rutas */

=======
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent}
  //{path:'/experiencias/crear', component: NewExperienciaComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
