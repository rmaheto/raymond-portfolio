import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { profile } from '../../data/profile';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { environment } from '../../environments/environment';
import { ContactService } from '../../services/contact.service';
import type { ContactRequest } from '../../shared/models/contact-request.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,
    CommonModule, RecaptchaModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  maxMessageLength = 300;
  warnAt = 100;   // start amber
  dangerAt = 25;  // turn
  p = profile;
  siteKey = environment.recaptcha_site_key;
  captchaToken: string | null = null;
  loading = false;

  constructor(
    private toast: ToastService,
    private contactService: ContactService
  ) { }

  onResolved(token: string | null) {
    this.captchaToken = token;
  }

  submit(form: NgForm) {
    if (form.invalid || !this.captchaToken) {
      Object.values(form.controls).forEach(c => c.markAsTouched());
      this.toast.show({
        type: 'error',
        title: 'Error',
        message: 'Please complete all fields and reCAPTCHA.',
        duration: 3000
      });
      return;
    }

    this.loading = true;

    const payload: ContactRequest = {
      ...form.value,
      captchaToken: this.captchaToken
    };

    this.contactService.sendMessage(payload).subscribe({
      next: () => {
        this.toast.show({
          type: 'success',
          title: 'Notification',
          message: 'Thanks for reaching out! I’ll get back to you soon.',
          duration: 3000
        });
        form.resetForm();
        this.captchaToken = null;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.toast.show({
          type: 'error',
          title: 'Error',
          message: 'Something went wrong. Please try again later.',
          duration: 3000
        });
        this.loading = false;
      }
    });
  }
}

