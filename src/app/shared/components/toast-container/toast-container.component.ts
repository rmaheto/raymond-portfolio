import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-toast-container',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="fixed top-5 right-5 space-y-3 z-50">
      <div *ngFor="let toast of toastService.toasts$ | async"
           [ngClass]="toastClass(toast.type)"
           class="p-4 rounded-lg shadow-lg flex items-start max-w-sm animate-slideIn">
        <div class="flex-1">
          <strong class="block text-sm font-medium">{{ toast.title }}</strong>
          <p class="text-sm">{{ toast.message }}</p>
        </div>
        <button class="ml-4 text-white/70 hover:text-white"
                (click)="toastService.remove(toast)">✕</button>
      </div>
    </div>
  `,
    styles: [`
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(100%); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slideIn {
      animation: slideIn 0.3s ease-out;
    }
  `]
})
export class ToastContainerComponent {
    constructor(public toastService: ToastService) { }

    toastClass(type: string) {
        switch (type) {
            case 'success': return 'bg-green-500 text-white';
            case 'warning': return 'bg-yellow-500 text-white';
            case 'error': return 'bg-red-500 text-white';
            default: return 'bg-blue-500 text-white';
        }
    }
}
