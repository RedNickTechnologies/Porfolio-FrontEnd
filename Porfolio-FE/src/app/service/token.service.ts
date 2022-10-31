import { Injectable } from '@angular/core';
import { JwtDto } from '../model/jwt-dto';
import { RolesAccount } from '../model/roles';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY ='AuthUsername';
const AUTHORITIES_KEY= 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {


  constructor() { }

  public setData(data: JwtDto){
    this.setToken(data.token);
    this.setUserName(data.nombreUsuario);
    this.setAuthorities(data.authorities);
  }

  public isLogged(): boolean{
    if(this.getToken()){
      return true;
    }
    return false;

  }


  public isAdmin(): boolean{
    let roles = this.getAuthorities();
    return roles.indexOf(RolesAccount.ADMIN)!= -1;
  }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setUserName(userName: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(){
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    let roles: string[]=[];

    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) =>{
        roles.push(authority.authority);
      });
    }
    return roles;
  }

  public logOut(): void{
    window.sessionStorage.clear();
  }
}
