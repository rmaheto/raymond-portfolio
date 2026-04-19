import { Component, AfterViewInit, OnDestroy, Type } from '@angular/core';
import { NgComponentOutlet, AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PortfolioApiService } from '../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe],
  template: `<ng-container *ngComponentOutlet="activeTheme$ | async"></ng-container>`,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  activeTheme$: Observable<Type<unknown> | null>;

  constructor(
    private route: ActivatedRoute,
    private portfolioApi: PortfolioApiService
  ) {
    this.activeTheme$ = this.portfolioApi.portfolio$.pipe(
      map((data) => data?.profile?.activeTheme ?? 'modern'),
      distinctUntilChanged(),
      switchMap((theme) => this.loadTheme(theme))
    );
  }

  ngAfterViewInit() {
    this.route.data.subscribe((data) => {
      if (data['scrollTo']) {
        setTimeout(() => {
          document.getElementById(data['scrollTo'])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    });
  }

  private async loadTheme(theme: string): Promise<Type<unknown>> {
    switch (theme) {
      case 'terminal': {
        const { TerminalThemeComponent } = await import('../themes/terminal/terminal-theme.component');
        return TerminalThemeComponent;
      }
      case 'modern':
      default: {
        const { ModernThemeComponent } = await import('../themes/modern/modern-theme.component');
        return ModernThemeComponent;
      }
    }
  }

  ngOnDestroy() {}
}
