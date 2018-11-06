import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllTopicsComponent } from './all-topics/all-topics.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationComponent } from './notification/notification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TopicComponent } from './topic/topic.component';

const routes: Route[] = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'topics',component: AllTopicsComponent},
  {path:'messages',component: MessagesComponent},
  {path:'notification',component:NotificationComponent },
  {path:'home/viewprofile',component:UserprofileComponent},
  {path:'topics/topic',component:TopicComponent},
  {path:'**',component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
