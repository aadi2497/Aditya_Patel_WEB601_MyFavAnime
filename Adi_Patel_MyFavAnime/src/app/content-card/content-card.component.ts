import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  myanime : ContentList = new ContentList();

  anime1 : Content = {
    id: 0,
    title: '',
    description: '',
    creator: ''
  }

  constructor(){
    this.myanime.addFunction(this.anime1);
  }

  displayMyIndex(index : number): string {
    return this.myanime.printIndex(index);

}
