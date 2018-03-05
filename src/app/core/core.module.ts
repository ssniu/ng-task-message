import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    //CommonModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  declarations: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent]
})
export class CoreModule {

//add SkipSelf to avoid the search in CoreModule itself, try to search in the upper level like parent level
//CoreModule is optional
    constructor(@Optional() @SkipSelf() parent: CoreModule){
        if(parent){
            throw new Error('module exists!');
        }
    }

}
