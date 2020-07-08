import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PasswordChecker} from './custom-validators/password-chaecker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form-signup';
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:  ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      acceptTandC: [false, Validators.requiredTrue]
    }, {
      validators: PasswordChecker('password','confirmPassword')
    });
  }

  get formControl() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    this.submitted = true;
    if(this.registerForm.invalid) return;

    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert("Success Signup" + JSON.stringify(this.registerForm.value));
  }

  onResetForm = () => {
    this.submitted = false;
    this.registerForm.reset();
  }
}