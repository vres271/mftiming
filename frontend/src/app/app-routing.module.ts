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
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { TagsComponent } from './components/tags/tags.component';
import { TagComponent } from './components/tag/tag.component';
import { RecieversComponent } from './components/recievers/recievers.component';
import { RecieverComponent } from './components/reciever/reciever.component';
import { LogComponent } from './components/log/log.component';
import { TrashComponent } from './components/trash/trash.component';
import { CommandsComponent } from './components/commands/commands.component';
import { DistributionsComponent } from './components/distributions/distributions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { RTQueueComponent } from './components/rtqueue/rtqueue.component';
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
  { path: 'user-groups',   component: UserGroupsComponent },
  { path: 'user-group',   component: UserGroupComponent },
  { path: 'user-group/:userGroupId',   component: UserGroupComponent },
  { path: 'tags',   component: TagsComponent },
  { path: 'tag',   component: TagComponent },
  { path: 'tag/:tagId',   component: TagComponent },
  { path: 'recievers',   component: RecieversComponent },
  { path: 'reciever',   component: RecieverComponent },
  { path: 'reciever/:recieverId',   component: RecieverComponent },
  { path: 'log',   component: LogComponent },
  { path: 'log/:objectType/:objectId',   component: LogComponent },
  { path: 'trash',   component: TrashComponent },
  { path: 'trash/:objectType',   component: TrashComponent },
  { path: 'trash/:objectType/:objectId',   component: TrashComponent },
  { path: 'commands',   component: CommandsComponent },
  { path: 'distributions',   component: DistributionsComponent },
  { path: 'settings',   component: SettingsComponent },
  { path: 'settings/:settingsType',   component: SettingsComponent },
  { path: 'accounts',   component: AccountsComponent },
  { path: 'account',   component: AccountComponent },
  { path: 'account/:accountId',   component: AccountComponent },
  { path: 'rtqueue',   component: RTQueueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
