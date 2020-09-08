import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
res:any;
Newses:any;
  constructor(private data: DataserviceService) { }

  ngOnInit(): void {
    this.getNews();
  }
getNews(){
this.data.getNews().subscribe((res)=>{
  this.res = res;
  this.Newses = this.res.news;
})
}
}
