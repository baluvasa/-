import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFilterPipe } from './my-filter.pipe';
import { EventEmitterService } from './event-emitter.service';

import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { CompaniesComponent } from './companies/companies.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { EtfSharesComponent }from './etfshares/etfshares.component';
import { StocksComponent } from './stocks/stocks.component';
import { ProfileComponent }  from './profile/profile.component';
import { OriginComponent } from './origin/origin.component';
import { EtfportfolioComponent } from './etfportfolio/etfportfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe,
    NewsComponent,
     CompaniesComponent,
      HeaderComponent,
      TopicsComponent,
      EtfSharesComponent,
      StocksComponent,
      ProfileComponent,
      OriginComponent,
      EtfportfolioComponent


  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
