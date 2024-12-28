import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'gifs-card-list',
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    imports: [NgFor, CardComponent],
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
