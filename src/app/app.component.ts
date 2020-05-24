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
  
  
  
}
