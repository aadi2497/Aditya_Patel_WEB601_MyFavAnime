import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
  title: string;
  description: string;
  author: string;
  contentTypeId: string;

  constructor(
    public dialogRef: MatDialogRef<AddContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { contentType: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    const content = {
      title: this.title,
      description: this.description,
      author: this.author
    };
    this.dialogRef.close(content);
  }
}
