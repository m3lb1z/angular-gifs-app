import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    templateUrl: './search-box.component.html',
    styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag(tag: string): void {
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
