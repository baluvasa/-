import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private ds:DataserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phonenumber: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(registerForm) {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
      let user={
        'firstName':registerForm.value['firstName'],
	'lastName':registerForm.value['lastName'],
	'userId':registerForm.value['email'],
	'phoneNumber':registerForm.value['phonenumber'].toString(),
	'emailId':registerForm.value['email'],
	'password':registerForm.value['password']
      }
      console.log(user)
this.ds.createuser(user).subscribe((res)=>{
	console.log(res)
this.ds.getallusers().subscribe((res)=>{console.log(res)});
});
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
