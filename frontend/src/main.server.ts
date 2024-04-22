import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { FrameworkComponent } from './app/components/framework/framework.component';


const bootstrap = () => bootstrapApplication(FrameworkComponent, config);

export default bootstrap;
