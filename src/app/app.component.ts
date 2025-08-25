import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  type ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterOutlet,
  NavigationEnd,
} from '@angular/router';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';
import { profile, type Links } from './data/profile';
import { filter } from 'rxjs/operators';
import { ThemeService } from './services/theme.service';
import { environment } from './environments/environment';

type LinkKey = keyof Links;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ToastContainerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  p = profile;
  isDark = true;
  currentYear = new Date().getFullYear();
  showBackToTop = false;
  scrollPercent = 0;
  progressBg = '';

  @ViewChild('sentinel', { static: true }) sentinel!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  socialLinks: { key: LinkKey; label: string }[] = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'github', label: 'GitHub' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'x', label: 'X' },
    { key: 'instagram', label: 'Instagram' },
  ];

  constructor(private router: Router, private theme: ThemeService) {
    this.theme.init();
    this.isDark = this.theme.isDark;
  }

  ngOnInit() {
    this.theme.isDark$.subscribe((v) => (this.isDark = v));
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = environment.canonicalBase + this.router.url;

        const existing = document.querySelector<HTMLLinkElement>(
          "link[rel='canonical']"
        );
        if (existing) existing.setAttribute('href', currentUrl);
        else {
          const link = document.createElement('link');
          link.setAttribute('rel', 'canonical');
          link.setAttribute('href', currentUrl);
          document.head.appendChild(link);
        }
        this.onWindowScroll();
      });
    this.onWindowScroll();
  }

  ngAfterViewInit() {
    this.io = new IntersectionObserver(
      ([entry]) => (this.showBackToTop = !entry.isIntersecting),
      { root: null, threshold: 0 }
    );
    this.io.observe(this.sentinel.nativeElement);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );

    this.scrollPercent = Math.min(100, Math.round((y / max) * 100));

    const ring = `conic-gradient(#3b82f6 ${
      this.scrollPercent * 3.6
    }deg, rgba(255,255,255,0.08) 0)`;
    const card =
      'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))';
    this.progressBg = `${ring}, ${card}`;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggle() {
    this.theme.setDark(!this.theme.isDark);
  }
}
