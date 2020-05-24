import {Routes} from '@angular/router';
import { AppComponent } from './app/app.component';
import { AboutComponent } from './app/about/about.component';
import { OopsComponent } from './app/oops/oops.component';
import { HomeComponent } from './app/home/home.component';
export const appRoutes: Routes = [
    /*
    {
        path: '', component: HomeComponent,
        children: [
            {path: 'About', component: AboutComponent}
        ]
    },
    */
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: '**', component: OopsComponent}
];