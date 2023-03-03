import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HoverAffectDirective } from '../hover-affect.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
 
  @Input() content?: Content;
  private _item: Content[];
  public inputvalue: string;

  constructor() {
    this._item=[];
    this.inputvalue ="Button Working";
  }

  getItem(): Content[] {
    return this._item;
  }

  clickEvent(): void {
    console.log(this.content?.type);
  }

  pritnItem() {
    console.log(this.content?.id);
    console.log(this.content?.title);
    console.log(this.content?.description);
    console.log(this.content?.creator);
  }


  ngOnInit(): void {
  }
  
}
