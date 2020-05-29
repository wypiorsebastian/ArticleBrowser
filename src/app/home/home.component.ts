import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Root } from '../_models/result';
import { HttpClient } from '@angular/common/http';
import { NytapiService } from '../_services/nytapi.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'ArticlesBrowser';
  model: any = {};
  root: Root;
  isLoading: boolean;
  btnText = 'Szukaj';
  curDate = new Date();

  // tslint:disable-next-line: max-line-length
  sortOptions = [{value: 'newest', display: 'Najnowsze'}, {value: 'oldest', display: 'Najstarsze'}, {value: 'relevance', display: 'Najtrafniejsze'}];
  pipe = new DatePipe('en-US');

  constructor(private http: HttpClient,
              private api: NytapiService,
              private route: ActivatedRoute,
              private alertify: AlertifyService) {}

  ngOnInit() {}

  loadDocs() {
    this.isLoading = true;
    this.btnText = 'Ładuję...';
    this.curDate.setDate(this.curDate.getDate() - 1 );
    this.api.getDocs(this.model.searchPhrase,
      this.pipe.transform(this.model.dateFrom, 'yyyyMMdd'),
      this.pipe.transform(this.model.dateTill, 'yyyyMMdd'),
      this.model.sortOrder).subscribe((root: Root) => {
      this.root = root;
      this.isLoading = false;
      this.btnText = 'Szukaj';
      if (this.root.response.docs.length === 0){
        this.alertify.warning('Nie znaleziono wyników');
      }
    }, error => {
      this.alertify.error('Wystąpił błąd połączenia');
      console.log(error);
      this.isLoading = false;
      this.btnText = 'Szukaj';
    });
  }

}
