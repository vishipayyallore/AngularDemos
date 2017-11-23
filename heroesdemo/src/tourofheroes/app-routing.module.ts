import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { TourOfHeroesComponent } from './heroeslist/tourofheroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heros', component: TourOfHeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
