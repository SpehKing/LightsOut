import { bootstrapApplication } from '@angular/platform-browser';
import { FrameworkComponent } from './app/components/framework/framework.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(FrameworkComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
}).catch(err => console.error(err));
