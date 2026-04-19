import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { Subscription } from 'rxjs';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { ThemeService } from '../../services/theme.service';
import { ContactService } from '../../services/contact.service';
import { ToastService } from '../../services/toast.service';
import { PortfolioData } from '../../models/portfolio.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-terminal-theme',
  standalone: true,
  imports: [CommonModule, FormsModule, RecaptchaModule],
  templateUrl: './terminal-theme.component.html',
})
export class TerminalThemeComponent implements OnInit, OnDestroy {
  data: PortfolioData | null = null;
  isDark = false;
  sending = false;
  captchaToken: string | null = null;
  readonly currentYear = new Date().getFullYear();
  readonly siteKey = environment.recaptcha_site_key;

  // Full Tailwind class strings here so the purger can find them
  readonly skillGroups = [
    {
      key: 'backend',
      label: 'Backend',
      icon: 'terminal',
      iconColor: 'text-indigo-500',
      borderHover: 'hover:border-indigo-500/50',
      pillHover: 'group-hover:text-indigo-500',
    },
    {
      key: 'frontend',
      label: 'Frontend',
      icon: 'web',
      iconColor: 'text-pink-500',
      borderHover: 'hover:border-pink-500/50',
      pillHover: 'group-hover:text-pink-500',
    },
    {
      key: 'devops',
      label: 'Cloud / DevOps',
      icon: 'cloud',
      iconColor: 'text-blue-500',
      borderHover: 'hover:border-blue-500/50',
      pillHover: 'group-hover:text-blue-500',
    },
    {
      key: 'db',
      label: 'Databases',
      icon: 'storage',
      iconColor: 'text-emerald-500',
      borderHover: 'hover:border-emerald-500/50',
      pillHover: 'group-hover:text-emerald-500',
    },
  ];

  // Alternating colors for experience timeline entries
  readonly expAccent = [
    { dot: 'bg-indigo-500', period: 'text-indigo-500', bullet: 'text-indigo-500' },
    { dot: 'bg-blue-500',   period: 'text-blue-500',   bullet: 'text-blue-500'   },
    { dot: 'bg-emerald-500', period: 'text-emerald-500', bullet: 'text-emerald-500' },
    { dot: 'bg-pink-500',   period: 'text-pink-500',   bullet: 'text-pink-500'   },
  ];

  private subs: Subscription[] = [];

  constructor(
    private portfolioApi: PortfolioApiService,
    public theme: ThemeService,
    private contact: ContactService,
    private toast: ToastService,
  ) {}

  ngOnInit() {
    this.isDark = this.theme.isDark;
    this.subs.push(
      this.portfolioApi.portfolio$.subscribe((d) => (this.data = d)),
      this.theme.isDark$.subscribe((v) => (this.isDark = v)),
    );
  }

  get firstName(): string {
    return this.data?.profile.name.split(' ')[0] ?? '';
  }

  get lastName(): string {
    return this.data?.profile.name.split(' ').slice(1).join(' ') ?? '';
  }

  get initials(): string {
    return (this.data?.profile.name ?? '')
      .split(' ')
      .filter(Boolean)
      .map((w) => w[0].toUpperCase())
      .join('');
  }

  skills(key: string): string[] {
    return this.data?.skills[key] ?? [];
  }

  stackPills(stack: string | undefined): string[] {
    if (!stack) return [];
    return stack.split(',').map((s) => s.trim()).filter(Boolean);
  }

  accent(i: number) {
    return this.expAccent[i % this.expAccent.length];
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleDark() {
    this.theme.setDark(!this.theme.isDark);
  }

  onResolved(token: string | null) {
    this.captchaToken = token;
  }

  sendMessage(form: NgForm) {
    if (form.invalid || !this.captchaToken) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      this.toast.show({ type: 'error', title: 'Error', message: 'Please complete all fields and the reCAPTCHA.' });
      return;
    }
    this.sending = true;
    this.contact.sendMessage({ ...form.value, captchaToken: this.captchaToken }).subscribe({
      next: () => {
        this.toast.show({ type: 'success', title: 'Sent!', message: "Thanks for reaching out! I'll get back to you soon." });
        form.resetForm();
        this.captchaToken = null;
        this.sending = false;
      },
      error: () => {
        this.toast.show({ type: 'error', title: 'Error', message: 'Something went wrong. Please try again.' });
        this.sending = false;
      },
    });
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
