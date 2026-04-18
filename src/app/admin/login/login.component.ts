import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  step: 'credentials' | 'verify' = 'credentials';

  username = '';
  password = '';
  code = '';
  error = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.error = '';
    this.loading = true;
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.step = 'verify';
        this.loading = false;
      },
      error: () => {
        this.error = 'Invalid username or password.';
        this.loading = false;
      },
    });
  }

  submitCode() {
    this.error = '';
    this.loading = true;
    this.auth.verifyCode(this.username, this.code).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: () => {
        this.error = 'Invalid or expired code. Please try again.';
        this.loading = false;
      },
    });
  }

  onCodeInput(value: string) {
    this.code = value.replace(/\D/g, '').slice(0, 6);
    if (this.code.length === 6 && !this.loading) {
      this.submitCode();
    }
  }

  backToCredentials() {
    this.step = 'credentials';
    this.code = '';
    this.error = '';
  }
}
