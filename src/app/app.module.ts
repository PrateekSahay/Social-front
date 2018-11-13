import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AllTopicsComponent } from './all-topics/all-topics.component';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { NotificationComponent } from './notification/notification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TopicComponent } from './topic/topic.component';
import { PublicprofileComponent } from './publicprofile/publicprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllTopicsComponent,
    MessagesComponent,
    NotificationComponent,
    ErrorPageComponent,
    UserprofileComponent,
    TopicComponent,
    PublicprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatSidenavModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatExpansionModule,
    MatPaginatorModule,
    FlexLayoutModule
  ],
  providers: [AllTopicsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
