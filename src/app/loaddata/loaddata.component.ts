import { Component, OnInit } from '@angular/core';

import { DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-loaddata',
  templateUrl: './loaddata.component.html',
  styleUrls: ['./loaddata.component.css']
})
export class LoaddataComponent implements OnInit {
  companies:any;
  response:any;
  exresponse:any;
  responseinfo:any;
  responseinfoprice:any;
  news:any;
  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
    // this.getdata();
  }
  getdata(){
    /*this.data.getCompaniesAPI().subscribe((res)=>{
      this.response = res;
      if (this.response.companies.length > 0)
      {
        this.companies = this.response.companies;
        */
        this.data.getCompanies().subscribe((res)=>{
          this.companies = res;          
          for( let i=0;i<this.companies.companyDetails.length;i++){
            this.data.getSelectedCompanieInfoAPI(this.companies.companyDetails[i].ticker).subscribe((resp)=>{
              this.responseinfo = resp;
              if( this.responseinfo.standardized_active ===true)
              {
                this.responseinfo.standardized_active  =1;
              }
              this.data.insertcomapnyinfo(this.responseinfo).subscribe((newres)=>{
              });
            })
            this.data.getPriceAPI(this.companies.companyDetails[i].ticker).subscribe((resp)=>{
              this.responseinfoprice = resp;
              let pr = this.responseinfoprice.data;
              for (let value  in pr) {
                pr[value].ticker = this.companies.companyDetails[i].ticker;
              };
              this.data.insertcomapnyprice(pr).subscribe((newres)=>{
              });
            })
          }
        });

/*      }
      else
      {
        alert('no companies are there')
      }
})*/
      }

      getExchangedata()
      {
this.data.getExchangeAPI().subscribe((eres)=>{
this.exresponse =eres;
this.data.insertEX(this.exresponse.stock_exchanges).subscribe((exres)=>{
  console.log(exres)
});
});
      }
      getnews()
      {
        this.data.getNewsAPI().subscribe((nres)=>{
          this.news =nres;
          let newnews=[];
          for( let i=0;i<this.news.news.length;i++){
            let newsone = {'cik':this.news.news[i].company.cik,'companyid': this.news.news[i].company.id,'lei': this.news.news[i].company.lei,'name': this.news.news[i].company.name,'ticker': this.news.news[i].company.ticker,'newsid': this.news.news[i].id,'publication_date': this.news.news[i].publication_date,'summary': this.news.news[i].summary,'title': this.news.news[i].title,'url': this.news.news[i].url}
            newnews.push(newsone);
          }
          this.data.insertnews(newnews).subscribe((exres)=>{
            console.log(exres)
          });
          });
      }

}
