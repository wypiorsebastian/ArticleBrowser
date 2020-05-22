import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from '../_models/response';
import { Root } from '../_models/result';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NytapiService {
  values: any;
  key: string;

  constructor(private http: HttpClient) { }

  getDocs(searchPhrase: string,
          dateFrom: string,
          dateTill: string): Observable<Root> {
    this.key = environment.apiKey;
    // tslint:disable-next-line: max-line-length
    //return this.http.get<Root>('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DuzN6GWQ9VGAfWA0fXGHKGuw6qSOcFqA',
    return this.http.get<Root>('https://api.nytimes.com/svc/search/v2/articlesearch.json', 
    {params: {q: searchPhrase, 'api-key': this.key, begin_date: dateFrom, end_date: dateTill}});
  }
}
