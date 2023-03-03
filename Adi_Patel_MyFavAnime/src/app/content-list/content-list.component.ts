import { Component, NgModule, OnInit, Optional } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { TmplAstBoundText } from '@angular/compiler';
import { FliterPipe } from '../fliter.pipe';
import { FormsModule } from '@angular/forms';
import { CreateContentComponent } from '../create-content/create-content.component';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
 
  public content: Content[];
  public inputvalue?: Optional;
  constructor() {
  this.content = [{
    id:0,
    title: 'Naruto',
    description: 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who constantly searches for recognition and dreams to become the Hokage, the ninja in his village who is acknowledged as the leader and the strongest of all.',
    creator: 'Masashi Kishimoto',
    //imgURL: 'https://static.tvtropes.org/pmwiki/pub/images/rsz_naruto.png',
    type: 'Action',
    tags: [`Action`, `Shounen`]
  },
  {
    id:1,
    title: 'One Piece',
    description:'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda.',
    creator: 'Eiichiro Oda',
    type: 'Adventure',
    imgURL: 'https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png',
  },
  {
    id:2,
    title: 'Bleach',
    description:'Bleach is a Japanese manga series written and illustrated by Tite Kubo. Bleach follows the adventures of the hotheaded teenager Ichigo Kurosaki after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki.',
    creator: 'Tite Kubo',
    type: 'Fight',
    tags: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Shounen'],
    imgURL: 'https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
  },
  {
    id:3,
    title: 'Dragon Ball Z',
    description:'Dragon Ball Z is a Japanese anime television series produced by Toei Animation. Dragon Ball Z is the sequel to the Dragon Ball anime and adapts the latter 325 chapters of the original 519-chapter Dragon Ball manga series created by Akira Toriyama which ran in Weekly Shōnen Jump from 1988 to 1995.',
    creator: 'Akira Toriyama',
    imgURL: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/35e4ac6339f5fdcc164160a5755790cd.jpe',
    type: 'Anime',
    tags: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Shounen']
  },
  {
    id:4,
    title: 'Dragon Ball Super',
    description:'Dragon Ball Super is a Japanese anime television series produced by Toei Animation that began airing on July 5, 2015 and ended on March 25, 2018. The series serves as a sequel to Dragon Ball Z and adapts the final 26 volumes of the Dragon Ball manga series created by Akira Toriyama which were published from 1999 to 2015 in Weekly Shōnen Jump.',
    creator: 'Akira Toriyama',
    imgURL: 'https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg',
    type: "Anime",
    tags: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Shounen'],
  },
  {
    id:5,
    title: 'Dragon Ball GT',
    description:'Dragon Ball GT is a Japanese anime television series and the fourth Dragon Ball anime series. It is a sequel to Dragon Ball Z and adapts the 23rd through 42nd volumes of the Dragon Ball manga series created by Akira Toriyama which were published from 1996 to 1997 in Weekly Shōnen Jump.',
    creator: 'Akira Toriyama',
    imgURL: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/3eb79333155a8e87b2f7be64f064c694.jpe',
    type: 'Manga',
    tags: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Shounen']
  },
  {
    id:6,
    title: 'Dragon Ball',
    description:'Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama. It was originally serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected into 42 tankōbon volumes by its publisher Shueisha.',
    creator: 'Akira Toriyama',
    imgURL: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/3eb79333155a8e87b2f7be64f064c694.jpe',
    type: 'Manga',
    tags: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Shounen']
  }
]
this.inputvalue ="";

}
    ngOnInit(): void {
  }
  clickEvent(): any {
  
    for(let i = 0;  i < this.content.length; i++) {
     console.log(this.content[i].type);
     let abj =  <HTMLInputElement>document.getElementById('aut');   
     console.log(abj.value);
     if(this.content[i].type === abj.value){
       let out= <HTMLInputElement>document.getElementById('msg');
        out.innerHTML = 'we found the item with other';
      }
    }
  }
  
  filteredContents: Content[] = [];
  filterText: string;
  errorMessage: string;

  onContentCreated(content: Content) {
    this.addContent(content)
      .then(() => {
        console.log(`Successfully added ${content.title}.`);
        this.errorMessage = '';
      })
      .catch(() => {
        console.error(`Failed to add ${content.title}.`);
        this.errorMessage = 'Failed to add content.';
      });
  }

  addContent(content: Content): Promise<void> {
    return new Promise((resolve, reject) => {
      const requiredFields = ['id', 'title', 'description', 'creator'];
      const missingFields = requiredFields.filter(type => !content[type]);
      if (missingFields.length > 0) {
        reject();
        this.errorMessage = `Please fill in the required fields: ${missingFields.join(', ')}.`;
        return;
      }
      const existingContent = this.content.find(c => c.id === content.id);
      if (existingContent) {
        reject();
        this.errorMessage = `Content with ID ${content.id} already exists.`;
        return;
      }
      const clonedContent = { ...content };
      this.content.push(clonedContent);
      this.filterContents();
      resolve();
    });
  }

  filterContents() {
    this.filteredContents = this.content.filter(content => {
      const filterText = this.filterText ? this.filterText.toLowerCase() : '';
      const contentTitle = content.title.toLowerCase();
      const contentDescription = content.description.toLowerCase();
      return contentTitle.includes(filterText) || contentDescription.includes(filterText);
    });
  }
  
}
