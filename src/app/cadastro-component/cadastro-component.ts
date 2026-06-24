import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-component',
  standalone: false,
  templateUrl: './cadastro-component.html',
  styleUrls: ['./cadastro-component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome:      ['', [Validators.required, Validators.minLength(3)]],
      email:     ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      confirmar: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  get nome()      { return this.cadastroForm.get('nome')!; }
  get email()     { return this.cadastroForm.get('email')!; }
  get password()  { return this.cadastroForm.get('password')!; }
  get confirmar() { return this.cadastroForm.get('confirmar')!; }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmar')!.value
      ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Cadastro:', this.cadastroForm.value);
      // TODO: integrar com AuthService
      this.router.navigate(['/login']); // redireciona para login após cadastro
    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }
}
