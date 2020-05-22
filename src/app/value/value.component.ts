import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NytapiService } from '../_services/nytapi.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }
  //constructor(private api: NytapiService) { }

  ngOnInit() {
    //this.getValues();
    //console.log('wyniki');
    //this.values = this.getValues();
    //console.log(this.values);
  }
  /*

  getValues() {
    this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DuzN6GWQ9VGAfWA0fXGHKGuw6qSOcFqA')
    .subscribe(response => {
      this.values = response;
      console.log(this.res);
    }, error => {
      console.log(error);
    });
  }
  */

}
