import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Employee } from '../employee'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 // data=[];
  allEmployees: Employee[] | undefined; 
  employeeForm: any ;
  ID: number | undefined ;
  employeeservice: any;
  displayStyle = "none";

  constructor(private users:UserdataService, private formbulider: FormBuilder) {   }
  ngOnInit(): void {
    this.employeeForm = this.formbulider.group({
      FName: [null],
      LName: [null],
      Country: [null],
      Email: [null]
    });
    this.loadAllEmployee();
  }

  closePopup() {
    this.displayStyle = "none";
  }
  //Load all employee
  loadAllEmployee() {
    const subscriber = this.users.getallemployeedetails().subscribe((emplist: any) => {this.allEmployees=emplist;subscriber.unsubscribe();  });
      }
   //Delete Employee Details
   deleteemployee(ID: any){
    if (confirm("Are you sure you want to delete this ?")) {   
        this.users.deleteemployeedetails(ID).subscribe(() => {  
        this.loadAllEmployee();    
      });  
    }  
  }

  //Update Employee Details
  updateemployee(ID:any){
      this.users.getemployeebyId(ID).subscribe((Employee: any)=> {     
      this.ID = ID;  
      this.employeeForm.controls['FName'].setValue(Employee.FName);  
      this.employeeForm.controls['LName'].setValue(Employee.LName);  
      this.employeeForm.controls['Country'].setValue(Employee.Country);  
      this.employeeForm.controls['Email'].setValue(Employee.Email); 
        
    });
    
    this.displayStyle = "block";
  }

   //updateRecords Employee Details
   updateRecords(Employee: Employee) {  
         Employee.ID = this.ID;  
      if(this.employeeForm.valid){
          this.users.updateemployeedetails(Employee).subscribe(() => {  
          this.loadAllEmployee();   
          this.employeeForm.reset();  
        }); 
      }
      this.displayStyle = "none"; 
  } 

   resetForm(){  
    this.employeeForm.reset();  
  }  

 
  }



