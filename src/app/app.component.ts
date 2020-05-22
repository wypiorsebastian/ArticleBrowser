import { Component } from '@angular/core';
import { NytapiService } from './_services/nytapi.service';
import { environment } from 'src/environments/environment';
import { NgForOf, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Doc } from './_models/doc';
import { ApiResponse } from './_models/apiresponse';
import { Response } from './_models/response';
import { Root } from './_models/result';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArticlesBrowser';
  model: any = {};
  root: Root;
  isLoading: boolean;
  btnText = '  Szukaj';
  curDate = new Date();
  
  // tslint:disable-next-line: max-line-length
  sortOptions = [{value: 'newest', display: 'Najnowsze'}, {value: 'oldest', display: 'Najstarsze'}, {value: 'relevance', display: 'Najtrafniejsze'}];
  pipe = new DatePipe('en-US');

  constructor(private http: HttpClient,
              private api: NytapiService,
              private route: ActivatedRoute) {}

  ngOnInit() {}

  loadDocs() {
    this.isLoading = true;
    this.btnText = 'Ładuję...';
    this.curDate.setDate(this.curDate.getDate() - 1 );
    this.api.getDocs(this.model.searchPhrase,
      this.pipe.transform(this.model.dateFrom, 'yyyyMMdd'),
      this.pipe.transform(this.model.dateTill, 'yyyyMMdd')).subscribe((root: Root) => {
      this.root = root;
      this.isLoading = false;
      this.btnText = 'Szukaj';
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }
}
