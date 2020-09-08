import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(public http: HttpClient) {
  }
  getCompanies() {
    return this.http.get<any>('https://api-v2.intrinio.com/companies?api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getSelectedCompanieInfo(company) {
    return this.http.get<any>('https://api-v2.intrinio.com/companies/'+company+'?api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getNews() {
    return this.http.get<any>('https://api-v2.intrinio.com/companies/news?api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getPrice(company){
    return this.http.get<any>('https://api.intrinio.com/prices?identifier='+company+'&api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getcsv()
  {
    return this.http.get<any>('./assets/prices.csv');
  }
}