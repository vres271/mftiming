import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { TagsComponent } from './components/tags/tags.component';
import { TagComponent } from './components/tag/tag.component';
import { RecieversComponent } from './components/recievers/recievers.component';
import { RecieverComponent } from './components/reciever/reciever.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverComponent } from './components/driver/driver.component';
import { LogComponent } from './components/log/log.component';
import { TrashComponent } from './components/trash/trash.component';
import { CommandsComponent } from './components/commands/commands.component';
import { DistributionsComponent } from './components/distributions/distributions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { RTQueueComponent } from './components/rtqueue/rtqueue.component';


const routes: Routes = [
  { path: '',   component: HomeComponent },
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
  { path: 'drivers',   component: DriversComponent },
  { path: 'driver',   component: DriverComponent },
  { path: 'driver/:driverId',   component: DriverComponent },
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
