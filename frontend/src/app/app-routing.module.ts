import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeasonsComponent } from './components/seasons/seasons.component';


const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'seasons',   component: SeasonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
