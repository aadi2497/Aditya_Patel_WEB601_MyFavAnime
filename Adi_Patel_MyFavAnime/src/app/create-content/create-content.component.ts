import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {

  @Output() newContentEvent = new EventEmitter<Content>();

  newContent: Content = {
    id: 0,
    title: '',
    type: '',
    description: '',
    creator: ''
  };

  errorMessage: string;

  submitNewContent(): void {
    if (!this.newContent.id || !this.newContent.title || !this.newContent.type) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.newContentEvent.emit(this.newContent);

    this.newContent = {
      id:0,
      title: '',
      type: '',
      description: '',
      creator: ''
    };

    this.errorMessage = '';
  }

}
