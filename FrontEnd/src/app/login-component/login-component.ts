import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email:      ['', [Validators.required, Validators.email]],
      password:   ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get email()    { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login:', this.loginForm.value);
      // TODO: integrar com AuthService
      this.router.navigate(['/home']);
    } else {
      this.loginForm.markAllAsTouched();
    }


  }

  irParaCadastro(): void {
    this.router.navigate(['/cadastrar']);
  }
}
