// theme.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
    private _isDark = new BehaviorSubject<boolean>(true);
    readonly isDark$ = this._isDark.asObservable();

    // Track if the user has explicitly chosen a theme
    private _userHasPreference = false;
    private mediaQuery?: MediaQueryList;
    private mqListener?: (e: MediaQueryListEvent) => void;

    init() {
        // 1) If user has already chosen, use it
        const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
        if (saved === 'dark' || saved === 'light') {
            this._userHasPreference = true;
            this.apply(saved === 'dark');
            return;
        }

        // 2) Otherwise, use system preference
        if (typeof window !== 'undefined' && 'matchMedia' in window) {
            this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            this.apply(this.mediaQuery.matches);

            // 3) (Optional) Keep in sync with system as long as user hasn't chosen
            this.mqListener = (e) => {
                if (!this._userHasPreference) this.apply(e.matches);
            };
            if (this.mediaQuery.addEventListener) {
                this.mediaQuery.addEventListener('change', this.mqListener);
            } else {
                // Safari < 14 fallback
                // @ts-ignore
                this.mediaQuery.addListener(this.mqListener);
            }
        } else {
            // Fallback: default dark or light as you prefer
            this.apply(true);
        }
    }

    setDark(next: boolean) {
        this._userHasPreference = true; // user explicitly toggled
        localStorage.setItem('theme', next ? 'dark' : 'light');
        this.apply(next);
    }

    get isDark() {
        return this._isDark.value;
    }

    private apply(isDark: boolean) {
        this._isDark.next(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }

    ngOnDestroy() {
        if (this.mediaQuery && this.mqListener) {
            if (this.mediaQuery.removeEventListener) {
                this.mediaQuery.removeEventListener('change', this.mqListener);
            } else {
                // @ts-ignore
                this.mediaQuery.removeListener(this.mqListener);
            }
        }
    }
}
