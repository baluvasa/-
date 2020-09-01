import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { CompaniesComponent } from './companies/companies.component';
import { UserformComponent } from './userform/userform.component';
import { LoaddataComponent} from './loaddata/loaddata.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { QuestionComponent } from './question/question.component';
const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component:CompaniesComponent },
  { path: 'news', component:NewsComponent },
  { path: 'userform', component:UserformComponent },
  { path: 'loaddata', component:LoaddataComponent },
  { path: 'exchange', component:ExchangeComponent },
  { path: 'question', component:QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
