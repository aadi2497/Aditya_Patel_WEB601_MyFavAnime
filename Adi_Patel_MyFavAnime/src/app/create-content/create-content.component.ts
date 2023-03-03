import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();
  newContent: Content = { 
    id: 0, 
    title: '', 
    type: '', 
    description: '',
    creator: ''
   };
  errorMessage: string;

  createContent() {
    if (!this.newContent.id || !this.newContent.title || !this.newContent.type || !this.newContent.body) {
      this.errorMessage = 'All fields are required';
      return Promise.reject();
    }
    const promise = new Promise<void>((resolve, reject) => {
      // Here you can add the code to send the new content item to the server or backend
      // If the request is successful, call the resolve function
      // If the request fails, call the reject function with an error message
    });

    promise.then(() => {
      console.log(`Content added successfully: ${this.newContent.title}`);
      this.newContent = {id: 0, 
        title: '', 
        type: '', 
        description: '',
        creator: '' };
      this.errorMessage = '';
      this.contentAdded.emit(Object.assign({}, this.newContent));
    }).catch(() => {
      this.errorMessage = 'Failed to add content';
    });
  }
}
