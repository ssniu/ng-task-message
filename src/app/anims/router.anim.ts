import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes, group
} from '@angular/animations';


export const slideToRight = trigger('routeAnim', [

    state('void', style({'position':'fixed', 'width':'100%','height':'100%'})),
    state('*', style({'position':'fixed', 'width':'100%','height':'80%'})),
    /*transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('.5s ease-in-out',style({transform: 'translateX(0)'})),
    ]),
    transition('* => void', [
        style({transform: 'translateX(0)'}),
        animate('.5s ease-in-out',style({transform: 'translateX(100%)'})),
    ]),*/
    //can use alias for void => *
    /*transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('.5s ease-in-out',style({transform: 'translateX(0)'})),
    ]),
    transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate('.5s ease-in-out',style({transform: 'translateX(100%)'})),
    ]),*/
    //group animation
    //fade in/out effect
    transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        group([
            animate('.5s ease-in-out',style({transform: 'translateX(0)'})),
            animate('.3s ease-in',style({opacity: 1})),
        ])

    ]),
    transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        group([
            animate('.5s ease-in-out',style({transform: 'translateX(100%)'})),
            animate('.3s ease-in',style({opacity: 0})),
        ])
    ]),

]);