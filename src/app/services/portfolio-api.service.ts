import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  private subject = new BehaviorSubject<PortfolioData | null>(null);
  readonly portfolio$ = this.subject.asObservable();

  constructor(private http: HttpClient) {
    this.load();
  }

  private load(): void {
    this.http.get<PortfolioData>('/api/v1/portfolio').subscribe({
      next: (data) => this.subject.next(data),
      error: (err) => console.error('Failed to load portfolio data', err),
    });
  }

  reload(): void {
    this.load();
  }

  updateProfile(profile: PortfolioData['profile']): Observable<PortfolioData['profile']> {
    return this.http.put<PortfolioData['profile']>('/api/v1/admin/profile', profile).pipe(
      tap(() => this.reload())
    );
  }

  uploadResume(file: File): Observable<string> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post('/api/v1/admin/resume', form, { responseType: 'text' }).pipe(
      tap(() => this.reload())
    );
  }

  uploadAvatar(file: File): Observable<string> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post('/api/v1/admin/avatar', form, { responseType: 'text' }).pipe(
      tap(() => this.reload())
    );
  }
}
