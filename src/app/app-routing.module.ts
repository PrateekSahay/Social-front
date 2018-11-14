import { NgModule } from '@angular/core';
import { Route, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllTopicsComponent } from './all-topics/all-topics.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationComponent } from './notification/notification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TopicComponent } from './topic/topic.component';
import { PublicprofileComponent } from './publicprofile/publicprofile.component';
import { SearchComponent } from './search/search.component';


const routes: Route[] = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'',component: HomeComponent},
  {path:'topics',component: AllTopicsComponent},
  {path:'messages',component: MessagesComponent},
  {path:'notification',component:NotificationComponent },
  {path:'viewprofile',component:UserprofileComponent},
  {path:'topics/:id',component:TopicComponent},
  {path:'profile',component:PublicprofileComponent},
  {path:'search', component: SearchComponent},
  {path:'**',component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
