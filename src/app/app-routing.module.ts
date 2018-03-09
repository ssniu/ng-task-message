import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { LoginComponent } from './login/login/login.component';



const routes: Routes =[
    //{ path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: 'login', component: LoginComponent },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'project', redirectTo: '/project',pathMatch: 'full' },
    { path: 'tasklist', redirectTo: '/tasklists',pathMatch: 'full' },

{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}
