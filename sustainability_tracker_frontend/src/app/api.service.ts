import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SustainabilityAction {
  id?: number;
  action: string;
  date: string;
  points: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/actions'; // ✅ Ensure this matches backend

  constructor(private http: HttpClient) {}

  // ✅ Fetch all actions
  getActions(): Observable<SustainabilityAction[]> {
    return this.http.get<SustainabilityAction[]>(this.apiUrl);
  }

  // ✅ Add a new action
  addAction(action: SustainabilityAction): Observable<any> {
    console.log("🔵 Sending POST request:", action); // ✅ Debugging log
    return this.http.post(this.apiUrl, action);
  }
}
