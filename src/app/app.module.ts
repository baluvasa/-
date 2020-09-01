import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFilterPipe } from './my-filter.pipe';
import { EventEmitterService } from './event-emitter.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { CompaniesComponent } from './companies/companies.component';
import { UserformComponent } from './userform/userform.component';
import { CommonWords} from '../assets/commonwords';

import { ReactiveFormsModule } from '@angular/forms';
import { LoaddataComponent } from './loaddata/loaddata.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { QuestionComponent } from './question/question.component';
@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe,
    NewsComponent,
    CompaniesComponent,
    UserformComponent,
    LoaddataComponent,
    ExchangeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EventEmitterService,CommonWords],
  bootstrap: [AppComponent]
})
export class AppModule { }
