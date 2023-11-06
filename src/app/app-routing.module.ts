import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatcComponent } from './contatc/contatc.component';

const routes: Routes = 
[
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"contact",component:ContatcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
