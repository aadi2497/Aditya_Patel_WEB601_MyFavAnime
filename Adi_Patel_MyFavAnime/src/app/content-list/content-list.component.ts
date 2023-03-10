import { Component, OnInit, Optional } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { content } from '../helper-files/contenDb';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  content: any[];

 // public content: Content[];
  public inputvalue?: Optional;
  item: any;

  constructor(private animeService: AnimeService) {
this.inputvalue ="";
}
    ngOnInit(): void {
      this.animeService.getContentArray().subscribe(data => {
        this.content = data;
      });

      const id = 0; // Replace with the actual id
      this.animeService.getItemById(id).subscribe(data => {
      this.content = [data, ...this.content];
    });
  }
  // clickEvent(): any {
  
  //   for(let i = 0;  i < this.content.length; i++) {
  //    console.log(this.content[i].type);
  //    let abj =  <HTMLInputElement>document.getElementById('aut');   
  //    console.log(abj.value);
  //    if(this.content[i].type === abj.value){
  //      let out= <HTMLInputElement>document.getElementById('msg');
  //       out.innerHTML = 'we found the item with other';
  //     }
  //   }
  // }
}
