import { Component, EventEmitter, Output } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  id: number;
  title: string;
  description: string;
  editing = false;

  contents: Content[] = [];
  

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private contentService: AnimeService, private messageService: MessageService, public dialog: MatDialog) { }

  

  addContent(newContent: Content) {
    this.contentService.addContent(newContent)
      .subscribe(content => {
        this.messageService.add(`Content added with id ${content.id}`);
        this.contentAdded.emit(content);
        this.title = '';
        this.description = '';
      });
  }

    updateContent(updatedContent: Content) {
      this.contentService.updateContent(updatedContent)
        .subscribe(content => {
          this.messageService.add(`Content updated with id ${content.id}`);
          this.title = '';
          this.description = '';

          this.editing = false;
        });
    }

    onSubmit() {
      if (this.id) {
        this.contentService.getItemById(this.id)
          .subscribe(content => {
            if (content) {
              const updatedContent: Content = { id: this.id, title: this.title, description: this.description };
              this.updateContent(updatedContent);
            } else {
              this.addContent({ id: this.id, title: this.title, description: this.description});
            }
          });
      } else {
        this.addContent({ id: this.id, title: this.title, description: this.description});
      }
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(AddContentDialogComponent, {
        data: { contentType: "Anime" } // Replace 'Movie' with the content type of your choice
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const content = {
            ...result,
            contentTypeId: 'movie' // Replace 'movie' with the content type of your choice
          };
          this.contentService.addContent(content).subscribe(() => {
            this.getContents(); // Refresh the list of contents
          });
        }
    });
  }

  ngOnInit(): void {
    this.getContents();
  }

  getContents(): void {
    this.contentService.getContentArray().subscribe(contents => {
      this.contents = contents;
    });
  }
}
