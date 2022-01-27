import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }
    url='http://182.76.195.171:5479'
    
   //Get
    getallemployeedetails():Observable<Employee[]>{
      return this.http.get<Employee[]>
      (this.url+'/api/GetRegistrationData');
    }
    getemployeebyId(ID:Number):Observable<Employee>{
      debugger
      return this.http.get<Employee>
      (this.url+'/GetRegistrationDataById?key='+ID);
    }
    


    //POST
  insertemployeedetails(Employee:Employee):Observable<Employee[]>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Employee[]>
    (this.url+'/InsertData/',Employee, httpOptions);
  }

  //Delete
  deleteemployeedetails(ID:Number):Observable<number>{
    console.log(ID);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.delete<number>
    (this.url+'/RemoveById?id=' +ID,httpOptions);
  }

  //PUT
  updateemployeedetails(employee:Employee):Observable<Employee>{
    // debugger
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
     return this.http.put<Employee>
     (this.url+'/UpdateById/',employee, httpOptions);
   }


}
