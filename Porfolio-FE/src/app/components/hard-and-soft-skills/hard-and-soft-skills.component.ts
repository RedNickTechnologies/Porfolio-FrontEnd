import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {
  skill: Skill[] =[];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  
  isAdmin= this.tokenService.isAdmin();

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data=>{
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if (id != undefined){
      this.skillS.delete(id).subscribe(
        data=> {
          this.cargarSkills();
        }, err => {
          alert ("No se pudo borrar la skill")
        }
        )
    }
  }

}
