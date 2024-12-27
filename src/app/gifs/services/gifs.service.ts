import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIFTS_API_KEY: string = 'Rtf78OgYGaop2HtGfxQzJjFavxvlAXur';
const GIFTS_API_URL: string = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    if (this._tagsHistory.length > 10) {
      this._tagsHistory.pop();
    }
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', GIFTS_API_KEY)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(`${GIFTS_API_URL}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        console.log(resp);
      });
  }
}
