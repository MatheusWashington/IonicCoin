import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private apiKey = 'd56eb6d0487bc5f7f1d5c13c';

  constructor(private http: HttpClient) {}

  getRates(baseCurrency: string): Observable<any> {
    return this.http.get(
      `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${baseCurrency}`
    );
  }

  getHistoricalRates(base: string, target: string) {
  return this.http.get(
    `https://api.exchangerate.host/timeseries?base=${base}&symbols=${target}&days=30`
  );
}
}