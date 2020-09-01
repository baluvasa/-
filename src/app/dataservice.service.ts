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
  getCompaniesAPI() {
    return this.http.get<any>('https://api-v2.intrinio.com/companies?api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getSelectedCompanieInfoAPI(company) {
    return this.http.get<any>('https://api-v2.intrinio.com/companies/'+company+'?api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getNewsAPI() {
    return this.http.get<any>('https://api-v2.intrinio.com/companies/news?api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getPriceAPI(company){
    return this.http.get<any>('https://api.intrinio.com/prices?identifier='+company+'&api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getExchangeAPI(){
    return this.http.get<any>('https://api-v2.intrinio.com/stock_exchanges?country_code=US&api_key=OmFmYmFiZDY2YjI0ZTA5NGJlNWRhZmViNzYzZGE4Zjg3');
  }
  getcsv()
  {
    return this.http.get<any>('./assets/prices.csv');
  }
  createuser(data){
	  // 13.232.55.20
      // let headers_value = new HttpHeaders();
      // headers_value = headers_value.set('Content-Type', 'application/json');
      // headers_value = headers_value.set('Access-Control-Allow-Origin','*');
      return this.http.post<any[]>('http://localhost:8086/sj/createuser', data)
    }
    getallusers(){
      // let headers_value = new HttpHeaders();
      // headers_value = headers_value.set('Content-Type', 'application/json');
      // headers_value = headers_value.set('Access-Control-Allow-Origin','*');
      return this.http.get<any[]>('http://localhost:8086/sj/getallusers')
    }
    insert(data){
      return this.http.post<any[]>('http://localhost:8086/sj/insertCompanies', data)
    }
    insertcomapnyinfo(data){
      return this.http.post<any[]>('http://localhost:8086/sj/insertCompanyinfo', data)
    }
    insertcomapnyprice(data){
      return this.http.post<any[]>('http://localhost:8086/sj/insertPrices', data)
    }
    getCompanies() {
      return this.http.get<any>('http://localhost:8086/sj/getAllCompanies');
    }
    getNews() {
      return this.http.get<any>('http://localhost:8086/sj/getAllNews');
    }
    getSelectedCompanieInfo(ticker) {
      return this.http.get<any>('http://localhost:8086/sj/getCompanyInfoById/'+ticker);
    }
    getPrice(id){
      return this.http.get<any>('http://localhost:8086/sj/getSelectedCompanyPrices/'+id);
    }
    insertEX(data){
      return this.http.post<any[]>('http://localhost:8086/sj/insertExchange', data)
    }
    getExchangedata(){
      return this.http.get<any>('http://localhost:8086/sj/getExchagnedata');
    }
    insertnews(data){
      return this.http.post<any[]>('http://localhost:8086/sj/insertNews', data)
    }
    insertQuestion(data){
      return this.http.post<any[]>('http://localhost:8086/sj/PostQuestion', data)
    }
    Getquestions(){
    return this.http.get<any>('http://localhost:8086/sj/GetQuestions')  }
    replyforquestion(data){
      return this.http.post<any[]>('http://localhost:8086/sj/PostQuestionreply', data)
    }
    replyhelpfulchange(id,data){
      return this.http.put<any[]>('http://localhost:8086/sj/Postreplyhelpful/'+id,data)
    }
}