import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from "angular-6-social-login";
import { DataCollectionService } from '../data-collection.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userInfo:any;

  constructor(private socialAuthService: AuthService,private topicsService: DataCollectionService) { }

  ngOnInit() {
  }

    
    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
        if(socialPlatform == "google"){
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        } 
      
      
      
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          this.userInfo=userData; 
          var userObj=new user();
          userObj.id=this.userInfo.id;
          userObj.name=this.userInfo.name;
          userObj.image=this.userInfo.image;
          var newObj=JSON.stringify(userObj);
          var postUserObj=JSON.parse(newObj);
          this.topicsService.postUser(postUserObj).subscribe();  
         // this.topicsService.postUser(newObj);  
        }
      );
    }
    
  }

  export class user {
    id:string;
    name:string;
    image:string;
  }




 

