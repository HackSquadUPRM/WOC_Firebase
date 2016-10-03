import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './modules/components/aboutMe.component';
import { AppComponent } from './modules/components/app.component';

const appRoutes: Routes = [
     {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'about',
        component: AboutMeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);