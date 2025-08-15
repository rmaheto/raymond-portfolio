import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
    type: 'success' | 'warning' | 'error' | 'info';
    title: string;
    message: string;
    duration?: number; // ms
}

@Injectable({ providedIn: 'root' })
export class ToastService {
    private _toasts = new BehaviorSubject<ToastMessage[]>([]);
    public toasts$ = this._toasts.asObservable();

    show(toast: ToastMessage) {
        const current = this._toasts.getValue();
        this._toasts.next([...current, toast]);

        // Auto-remove after duration
        setTimeout(() => this.remove(toast), toast.duration ?? 3000);
    }

    remove(toast: ToastMessage) {
        this._toasts.next(this._toasts.getValue().filter(t => t !== toast));
    }
}
