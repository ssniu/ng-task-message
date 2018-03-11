import { NgModule, SkipSelf, Optional } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
//import {MatIconModule} from '@angular/material/icon';
//import { DomSanitizer } from '@angular/platform-browser';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import {MatButtonModule} from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import 'rxjs/add/operator/take';

//import {loadSvgResources} from '../utils/svg.util';

@NgModule({
  imports: [
    //CommonModule,
    //MatToolbarModule,
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
    //MatIconRegistry,

    //MatIconModule,
    //MatButtonModule //make the button to font
  ],
  exports: [
    //CommonModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  declarations: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent
  ],
  providers: [

  ]
})
export class CoreModule {

//add SkipSelf to avoid the search in CoreModule itself, try to search in the upper level like parent level
//CoreModule is optional
    constructor(
        @Optional() @SkipSelf() parent: CoreModule
        //iconRegistry: MatIconRegistry,
    //sanitizer: DomSanitizer
){
        if(parent){
            throw new Error('module exists!');
        }
        //loadSvgResources(iconRegistry, sanitizer);
    }

}
