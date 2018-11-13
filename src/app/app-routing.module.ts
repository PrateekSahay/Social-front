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
import { InjectionToken } from '@angular/core';



// const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Route[] = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'',component: HomeComponent},
  {path:'topics',component: AllTopicsComponent},
  {path:'messages',component: MessagesComponent},
  {path:'notification',component:NotificationComponent },
  {path:'viewprofile',component:UserprofileComponent},
  {path:'topics/:id',component:TopicComponent},
  {path:'profile',component:PublicprofileComponent},
  // {path:'externalRedirect',resolve: {url: externalUrlProvider}, redirectTo:'/'},
  {path:'**',component: ErrorPageComponent}
];

@NgModule({
//   providers: [
//     {
//         provide: externalUrlProvider,
//         useValue: (route: ActivatedRouteSnapshot) => {
//             const externalUrl = route.paramMap.get('http://172.23.238.164:4202/play');
//             window.open(externalUrl, '_self');
//         },
//     },
// ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
