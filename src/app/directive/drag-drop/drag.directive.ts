import { Directive, HostListener, ElementRef, Renderer2,Input } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {

    private _isDraggable = false;

    //input alias
    @Input('app-draggable')
    set isDraggable(val: boolean){
        this._isDraggable = val;
        this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
    }
    get isDraggable(){
        return this._isDraggable;
    }

 @Input() draggedClass: string;
 @Input() dragData: any;
  @Input() dragTag: string;


  constructor(private el:ElementRef,
      private rd: Renderer2,
      private service: DragDropService ) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event){
          //confirm the drag element
          if(this.el.nativeElement === e.target){
              this.rd.addClass(this.el.nativeElement, this.draggedClass);
              this.service.setDragData({tag: this.dragTag, data: this.dragData});
          }
      }


  @HostListener('dragend', ['$event'])
  onDragEnd(e: Event){
      if(this.el.nativeElement === e.target){
          this.rd.removeClass(this.el.nativeElement, this.draggedClass);
      }
  }

 }
