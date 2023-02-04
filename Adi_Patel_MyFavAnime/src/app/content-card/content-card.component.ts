import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
 
  @Input() contentItem?: Content;
  private _item: Content[];
  constructor() {
    this._item=[];
  }

  getItem(): Content[] {
    return this._item;
  }

  pritnItem() {
    console.log(this.contentItem?.id);
    console.log(this.contentItem?.title);
    console.log(this.contentItem?.description);
    console.log(this.contentItem?.creator);
  }


  ngOnInit(): void {
  }
  
}
