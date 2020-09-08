import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent} from './header/header.component';
import { NewsComponent } from './news/news.component';
import { CompaniesComponent } from './companies/companies.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent}from './questions/questions.component';
import { EtfSharesComponent } from './etfshares/etfshares.component';
import { StocksComponent } from './stocks/stocks.component';
import { ProfileComponent } from './profile/profile.component';
import { OriginComponent } from './origin/origin.component';
import { EtfportfolioComponent } from './etfportfolio/etfportfolio.component';


const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'companies', component:CompaniesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'etfshares', component: EtfSharesComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'origin', component: OriginComponent },
  { path: 'etfportfolio', component: EtfportfolioComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
