import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {

  content: Content[];
  message: string;

  constructor(
    private route: ActivatedRoute,
    private contentService: AnimeService
  ) {}

  ngOnInit(): void {
    this.getContents();
  }

  getContents(): void {
    this.contentService.getContentArray().subscribe(contents => {
      this.content = contents;
    });
  }

}
