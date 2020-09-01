import { Component, OnInit } from '@angular/core';

import { DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
exchanges:any;
res:any;
  constructor(private data:DataserviceService ) { }

  ngOnInit(): void {
    this.getExchange();
  }
getExchange()
{
  this.data.getExchangedata().subscribe((resp)=>{
    this.res=resp;
    this.exchanges = this.res.ExchangeDetails; 
    console.log(this.exchanges)
  });
}
}
