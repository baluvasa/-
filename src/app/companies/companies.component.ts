import { Component, OnInit } from '@angular/core';

import { DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies:any;
  response:any;
  responseinfo:any;
  prices:any;
  selectedcompanyinfo:any;
  selectedcompany = '';
  comapniesshow = true;
  showshort = false;
  showprice = false;
  constructor(private data:DataserviceService ) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.data.getCompanies().subscribe((res)=>{
      this.response = res;
      if (this.response.companyDetails.length > 0)
      {
        this.companies = this.response.companyDetails;

      }
      else
      {
        alert('no companies are there')
      }
    })
      }
      selectedticker(companie){
        this.comapniesshow = false;
    this.selectedcompany = companie.ticker;
        this.data.getSelectedCompanieInfo(this.selectedcompany).subscribe((res)=>
        {
    this.response = res;
    this.selectedcompanyinfo  = this.response.companyDetails;
    this.showshort = true;
        })
      }
      longdescription(){
        this.showshort = false;
      }
      reloadCompanies(){
        this.comapniesshow = true;
        this.showshort = true;
      }
      priceinfo(ticker){
        this.data.getPrice(ticker).subscribe((res)=>{
          this.showprice =true;
          this.response = res;
          this.prices = this.response;
        }
        );
      }
}
