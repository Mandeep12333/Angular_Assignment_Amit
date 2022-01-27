import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from'@angular/forms'
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  dataSaved = false;  
  employeeForm: any;  
  
  allEmployees: Observable<Employee[]> | undefined;  
  ID = null;   
  submitted = false;
  massage: string | undefined;
  name: any | undefined;

  constructor(private router: Router,private formbulider: FormBuilder,private userdataservice:UserdataService) { }

  ngOnInit(): void {   
    //debugger 
    this.employeeForm = this.formbulider.group({  
      FName: ['', [Validators.required,Validators.maxLength(30),Validators.pattern('^[a-zA-Z ]*$')]],
      LName: ['', [Validators.required,Validators.maxLength(30),Validators.pattern('[aA-zZ]{1,30}')]],    
      Country: ['', [Validators.required,Validators.maxLength(15),Validators.pattern('[aA-zZ]{1,30}')]],    
      Email: ['', [Validators.required,Validators.email]]    
    }); 
  }
  onFormSubmit() {  
    //debugger
    this.dataSaved = false;  
    const Employee = this.employeeForm.value;  
    this.insertEmployee(Employee);  
    this.employeeForm.reset();  
  } 
     //Insert Employee Details
     insertEmployee(Employee: Employee) {
    
      debugger
      //this.findInvalidControls();
      if (this.ID == null) {
        if(this.employeeForm.valid){  
        this.userdataservice.insertemployeedetails(Employee).subscribe(  
          () => {
            this.dataSaved = true;
            this.massage = 'Record saved Successfully';
            setTimeout(()=>{    
              this.massage = '';
         }, 2000);
            this.ID = null;
            this.employeeForm.reset();
            this.submitted = false;
          }  
        );
        // this.router.navigate(['/employee']); 
      } else{
        this.massage="Required!"
        this.massage='Enter all details';
        this.submitted = true;
      } 
      }/* else {  
        Employee.ID = this.ID;
        if(this.employeeForm.valid){  
        this.userdataservice.updateemployeedetails(Employee).subscribe(() => {  
          this.dataSaved = true;  
          this.massage = 'Record Updated Successfully';  
          this.ID = null;  
          this.employeeForm.reset();  
        });  
      } else{
        this.massage='Enter all details';
      }
      }*/
    }
  findInvalidControls() {
    throw new Error('Method not implemented.');
  }

  

}
