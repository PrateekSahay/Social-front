import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular-6-social-login";

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("372669880011-ed433rvth0v3q1l3ile73slnf81261sp.apps.googleusercontent.com")
    }]);
    
    return config;
}