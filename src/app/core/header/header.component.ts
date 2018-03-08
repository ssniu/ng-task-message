import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output()
    toggle = new EventEmitter<void>();
    @Output()
    toggleTheme = new EventEmitter<boolean>();


  /*constructor(private iconRegistry: MatIconRegistry,
      private sanitizer: DomSanitizer) {
          //add svg icon to registry, add ownname in addSvgIcon
          iconRegistry.addSvgIcon('gifts', sanitizer.bypassSecurityTrustResourceUrl('../gifts.svg'));

      }*/

  construtor(){}

  ngOnInit() {
  }

  openSidebar(){
      this.toggle.emit();
  }

  onChange(checked: boolean){
      this.toggleTheme.emit(checked);
  }

}
