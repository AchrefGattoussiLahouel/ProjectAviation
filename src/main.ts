import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configures the router with your app's routes
    provideHttpClient(withInterceptorsFromDi()), // Configures HttpClient with DI and interceptors
    ...appConfig.providers, // Spread the providers from appConfig if needed
  ],
}).catch((err) => console.error(err));
