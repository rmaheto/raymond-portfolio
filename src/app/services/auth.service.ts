import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginResponse {
  token: string;
  expiresAt: number;
}

interface CodeSentResponse {
  message: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'admin_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<CodeSentResponse> {
    return this.http.post<CodeSentResponse>('/api/v1/auth/login', { username, password });
  }

  verifyCode(username: string, code: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/v1/auth/verify', { username, code }).pipe(
      tap((res) => localStorage.setItem(this.TOKEN_KEY, res.token))
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
