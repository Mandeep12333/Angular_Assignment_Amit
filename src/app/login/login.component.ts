import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { EmployeeSignIn } from '../employee';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  employeeForm1: any;
  routelink: any;
  submitted: boolean | undefined;
  errorMessage: string | undefined;
  user = '1';
  

  constructor(private router:Router,private formbulider: FormBuilder,private users:UserdataService, private spinnerService: NgxSpinnerService) { }
  
  ngOnInit(): void {
    
    debugger
    this.employeeForm1 = this.formbulider.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
   
  }
  
 // get f() {return this.employeeForm.controls;}

   Login(Employee: EmployeeSignIn){

    debugger
    this.spinnerService.show();
    if(this.employeeForm1.valid){

       const user1= this.employeeForm1.value;
       
       this.users.Login(user1).subscribe(    
        data => {
          debugger
          if (data != "Invalid username and password")
          {
            localStorage.setItem('SeesionUser',this.user)
            this.router.navigate(['/dashboard']);   
            //this.spinner.hide();  
            setTimeout(() => {
              this.spinnerService.hide();
            },500); // 5 seconds   
          }    
          else{
            this.submitted = true;
            setTimeout(()=>{    
              this.submitted = false;
              // this.spinner.hide();
            }, 2000);  
          }    
          //this.spinner.hide();
        },    
        error => {    
          this.submitted = true;
          this.errorMessage = "Not Matched";  
          setTimeout(()=>{    
            this.errorMessage = '';
       }, 2000);  
        });
     }
   }

}
