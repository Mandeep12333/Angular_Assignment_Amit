import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServiceService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("SeesionUser");  
    } 
}
