import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { CompetitorComponent } from './components/competitor/competitor.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { RacesComponent } from './components/races/races.component';
import { RaceComponent } from './components/race/race.component';
import { GoComponent } from './components/go/go.component';


import { SignInComponent } from './components/sign-in/sign-in.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'competitors',   component: CompetitorsComponent },
  { path: 'competitor',   component: CompetitorComponent },
  { path: 'competitor/:competitorId',   component: CompetitorComponent },
  { path: 'categories',   component: CategoriesComponent },
  { path: 'category',   component: CategoryComponent },
  { path: 'category/:categoryId',   component: CategoryComponent },
  { path: 'races',   component: RacesComponent },
  { path: 'race/:raceId',   component: RaceComponent },
  { path: 'race',   component: RaceComponent },
  { path: 'go/:raceId',   component: GoComponent },
  { path: 'go',   component: GoComponent },
  { path: 'results/:raceId',   component: ResultsComponent },


  { path: 'login',   component: SignInComponent },
  { path: 'users',   component: UsersComponent },
  { path: 'user',   component: UserComponent },
  { path: 'user/:userId',   component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
