import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { JokesComponent } from './jokes/jokes.component';
import { NgForDemoComponent } from './directivesdemo/ngfordemo/ngfordemo.component';

const routes: Routes = [
    { path: '', redirectTo: '/jokes', pathMatch: 'full' },
    { path: 'jokes', component: JokesComponent },
    { path: 'ngfordemo', component: NgForDemoComponent },
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
