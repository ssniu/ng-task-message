import { Component} from '@angular/core';
//import { OverlayContainer } from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 /* animations: [
      trigger('square',  [
          state('green', style({'background-color':'green',
          'height':'100px', 'transform':'translateX(0)'})),
          state('red', style({'background-color': 'red',
          'height':'50px','transform':'translateX(100%)'})),
         // transition('green => red', animate(1000)),
          // transition('red => green', animate(1000))
           transition('green => red', animate('.5s ease-in')),
            transition('red => green', animate(5000, keyframes([
                style({transform: 'translateX(100%)'}),
                style({transform: 'translateX(90%)'}),
                style({transform: 'translateX(80%)'}),
                style({transform: 'translateX(50%)'}),
                style({transform: 'translateX(20%)'}),
                style({transform: 'translateX(10%)'}),
                style({transform: 'translateX(0)'}),
                style({transform: 'translateX(-10%)'}),
                style({transform: 'translateX(-2%)'}),
                style({transform: 'translateX(0)'}),
                style({transform: 'translateX(10%)'}),
                style({transform: 'translateX(20%)'}),
                style({transform: 'translateX(0)'})
            ])))
            //transition('green => red', animate('.5s cubic-bezier(0.68,-0.55,0.265,1.55)')),
      ]
  )]*/
})
export class AppComponent {

  darkTheme = false;
  squareState: string;

  switchTheme(dark){
      this.darkTheme = dark;
  }

  /*onClick(){
      this.squareState = this.squareState === 'red' ? 'green':'red';
  }*/
}

class Address {
    state: string;


}

class Id {


}
class Person {
    id: Id;
    address: Address;

}
