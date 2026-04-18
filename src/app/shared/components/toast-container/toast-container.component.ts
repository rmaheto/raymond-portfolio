import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-6 right-6 z-[200] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
      <div
        *ngFor="let toast of toastService.toasts$ | async"
        class="toast-item glass-panel rounded-xl p-5 shadow-2xl flex items-start gap-4 pointer-events-auto"
        [ngClass]="borderClass(toast.type)">

        <!-- Icon -->
        <div class="shrink-0 p-2 rounded-lg" [ngClass]="iconBgClass(toast.type)">
          <span class="material-symbols-outlined text-lg filled" [ngClass]="iconColorClass(toast.type)">
            {{ iconName(toast.type) }}
          </span>
        </div>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-center mb-1 gap-2">
            <h4 class="font-headline font-bold text-on-surface text-sm truncate">{{ toast.title }}</h4>
            <span class="text-[10px] font-label text-outline uppercase tracking-wider shrink-0">Just now</span>
          </div>
          <p class="text-sm text-on-surface-variant leading-relaxed">{{ toast.message }}</p>
        </div>

        <!-- Close -->
        <button (click)="toastService.remove(toast)"
          class="shrink-0 text-outline hover:text-on-surface transition-colors duration-200 mt-0.5">
          <span class="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .glass-panel {
      background: rgba(45, 52, 73, 0.85);
      backdrop-filter: blur(24px);
    }
    .filled {
      font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(110%); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .toast-item {
      animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `]
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}

  borderClass(type: ToastMessage['type']): string {
    const map: Record<ToastMessage['type'], string> = {
      success: 'border-l-4 border-secondary',
      error:   'border-l-4 border-error',
      warning: 'border-l-4 border-tertiary',
      info:    'border-l-4 border-primary',
    };
    return map[type];
  }

  iconBgClass(type: ToastMessage['type']): string {
    const map: Record<ToastMessage['type'], string> = {
      success: 'bg-secondary/20',
      error:   'bg-error/20',
      warning: 'bg-tertiary/20',
      info:    'bg-primary/20',
    };
    return map[type];
  }

  iconColorClass(type: ToastMessage['type']): string {
    const map: Record<ToastMessage['type'], string> = {
      success: 'text-secondary',
      error:   'text-error',
      warning: 'text-tertiary',
      info:    'text-primary',
    };
    return map[type];
  }

  iconName(type: ToastMessage['type']): string {
    const map: Record<ToastMessage['type'], string> = {
      success: 'check_circle',
      error:   'error',
      warning: 'warning',
      info:    'info',
    };
    return map[type];
  }
}
