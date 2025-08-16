import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import type { ContactRequest } from '../shared/models/contact-request.model';


@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private base = environment.apiBaseUrl;
    private apiUrl = `${this.base}/api/v1/contact`; 


    constructor(private http: HttpClient) { }

    sendMessage(payload: ContactRequest): Observable<any> {
        console.log('payload',payload);
        return this.http.post(this.apiUrl, payload);
    }
}
