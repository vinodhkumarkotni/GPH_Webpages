import { Component, OnInit } from '@angular/core';
import {   FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent implements OnInit {

  submitPrayerRequestForm:FormGroup;
  constructor(private router:Router) {

   }

  ngOnInit() {
    this.submitPrayerRequestForm=new FormGroup({
      Name:new FormControl(null,Validators.required),
      PhoneNumber:new FormControl(null,[Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      PrayerRequest:new FormControl(null,Validators.required)
    });
  }

  get PhoneNumber(){
    return this.submitPrayerRequestForm.get('PhoneNumber') as FormControl;
  }

  // onSubmitTemp(Frm:NgForm){
  //   console.log(Frm)
  //   //alert("Prayer Request Submitted Successfully");
  //   //this.router.navigate(['/']);
  // }
  onSubmit(){
    //   console.log(Frm)
      alert("Prayer Request Submitted Successfully");
      this.router.navigate(['/']);
  }
  onCancel(){
    this.router.navigate(['/']);
  }
  onKeyPress(){
    //alert("Prayer Request Submitted Successfully");
  }
}
