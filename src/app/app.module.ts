import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//change core.module.ts to index.ts; change the folder to "from './core'" ";
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
//import { MdSidenavModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginModule } from './login/login.module';

//import { ProjectRoutingModule } from './project/project-routing.module';
import { ProjectModule } from './project/project.module';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginModule,
    ProjectModule,
    AppRoutingModule
    //LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
