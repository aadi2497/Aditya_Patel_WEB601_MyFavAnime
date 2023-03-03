import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ɵisPromise } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
newContent: Content = new Content();
  types: string[] = ['Article', 'Blog Post', 'Video', 'Podcast'];
  errorMessage: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  onSubmit() {
    if (!this.newContent.id || !this.newContent.title || !this.newContent.description || !this.newContent.type) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }
    this.errorMessage = '';
    const promise = new Promise((resolve, reject) => {
      this.contentAdded.emit(this.newContent.clone());
      resolve();
    });
    promise
      .then(() => {
        console.log(`Added content: ${this.newContent.title}`);
        this.newContent = new Content();
      })
      .catch(() => {
        this.errorMessage = 'Failed to add content';
      });
  }


}
