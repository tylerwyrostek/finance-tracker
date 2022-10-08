import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transactions.types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }


  addTransactions(transactions: Transaction[]): Observable<any>{
    return this.http.post(`${environment.baseURL}/transactions`, transactions);
  }
}
