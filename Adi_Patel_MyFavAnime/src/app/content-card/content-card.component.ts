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
      title: 'One Piece',
      description: 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda.',
      creator: 'Shueisha'
    }
    anime2 : Content = {
      id: 1,
      title: 'Naruto',
      description: 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto.',
      creator: 'Masashi Kishimoto'
    }
    anime3 : Content = {
      id: 2,
      title: 'Demon Slayer',
      description: 'A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.',
      creator: 'Koyoharu Gotouge'
    }

    constructor(){
      this.myanime.addFunction(this.anime1);
      this.myanime.addFunction(this.anime2);
      this.myanime.addFunction(this.anime3);
    }

    displayMyIndex(index : number): string {
      return this.myanime.printIndex(index);
  }
}
