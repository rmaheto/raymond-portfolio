import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { environment } from '../../environments/environment';
import { ContactService } from '../../services/contact.service';
import type { ContactRequest } from '../../shared/models/contact-request.model';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { PortfolioProfile } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RecaptchaModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  @Input() isDark = false;
  maxMessageLength = 300;
  warnAt = 100;
  dangerAt = 25;
  p: PortfolioProfile | null = null;
  siteKey = environment.recaptcha_site_key;
  captchaToken: string | null = null;
  loading = false;

  constructor(
    private toast: ToastService,
    private contactService: ContactService,
    private portfolioApi: PortfolioApiService
  ) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((data) => {
      if (data) this.p = data.profile;
    });
  }

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }

  onResolved(token: string | null) {
    this.captchaToken = token;
  }

  submit(form: NgForm) {
    if (form.invalid || !this.captchaToken) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      this.toast.show({
        type: 'error',
        title: 'Error',
        message: 'Please complete all fields and reCAPTCHA.',
        duration: 3000,
      });
      return;
    }

    this.loading = true;

    const payload: ContactRequest = {
      ...form.value,
      captchaToken: this.captchaToken,
    };

    this.contactService.sendMessage(payload).subscribe({
      next: () => {
        this.toast.show({
          type: 'success',
          title: 'Notification',
          message: 'Thanks for reaching out! I’ll get back to you soon.',
          duration: 3000,
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
          duration: 3000,
        });
        this.loading = false;
      },
    });
  }
}
