import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(private router:Router) { 
   var data= localStorage.removeItem('SeesionUser');
   if(data == undefined){
    this.router.navigate(['/login']);
     }
   }

  ngOnInit(): void {

  }

}
