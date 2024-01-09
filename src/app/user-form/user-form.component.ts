import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator'; // Import custom validator

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup; // Declare FormGroup for the user form
  companyName: string = 'Nash Tech';
  currentYear: number = new Date().getFullYear();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      birthdate: ['', Validators.required],
    }, {
      validators: MustMatch('password', 'confirmPassword') // Use the factory function
    });
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  get birthdate() {
    return this.userForm.get('birthdate');
  }

  onSubmit() {   // Handle the form submission
    if (this.userForm.valid) {
      console.log('Form submitted!', this.userForm.value);
      alert('Form submitted successfully!');
    } else {
      console.log('Form is invalid. Please fix the errors.');
    }
  }
}
