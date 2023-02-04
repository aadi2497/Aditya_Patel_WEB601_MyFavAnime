import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  myanime: Content[];
  
  constructor() {
  this.myanime = [{
    id:0,
    title: 'Naruto',
    description: 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who constantly searches for recognition and dreams to become the Hokage, the ninja in his village who is acknowledged as the leader and the strongest of all.',
    creator: 'Masashi Kishimoto',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/3/30/Naruto%21_cover.jpg',
    type: 'Anime',
    tags: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Shounen']
  }]
}
    ngOnInit(): void {
  }
}
