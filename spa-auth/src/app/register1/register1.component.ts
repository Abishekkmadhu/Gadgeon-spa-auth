import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {

  signupForm!: FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group(
      {
        name:[''],
        email:[''],
        password:['']
      }
    )
  }
  signup(){
    this.http.post<any>('http://localhost:3000/users', this.signupForm.value).subscribe(res=>{
      alert("Data Entry Succesfull");
    })
    
  }

}
