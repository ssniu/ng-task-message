import { Component, OnInit , Input,
    Output, EventEmitter,
    HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnim],
})
export class ProjectItemComponent implements OnInit {
    @Input() item;

    @Output() onInvite = new EventEmitter<void>();

    @Output() onEdit = new EventEmitter<void>();

    @Output() onDel = new EventEmitter<void>();

    //bind animation
    @HostBinding('@card') cardState = 'out'; //== project-list: [@card]='cardState'


  constructor() { }

  ngOnInit() {
  }

  onInviteClick(){
      this.onInvite.emit();
  }

  onEditClick(){
      this.onEdit.emit();
  }
  onDelClick(){
      this.onDel.emit();
  }

  @HostListener('mouseenter')
  //@HostListener('moseenter', ['$event.target'])
  onMouseEnter(){
      this.cardState = 'hover';
  }


    @HostListener('mouseleave')
    //@HostListener('moseenter', ['$event.target'])
    onMouseLeave(){
        this.cardState = 'out';
    }

}
