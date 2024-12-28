import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { NgFor, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [NgFor, TitleCasePipe],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
