import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//change core.module.ts to index.ts; change the folder to "from './core'" ";
import { CoreModule } from './core/core.module';

import { MatSidenavModule } from '@angular/material/sidenav';
//import { MdSidenavModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
