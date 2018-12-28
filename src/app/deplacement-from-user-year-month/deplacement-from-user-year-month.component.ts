import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-deplacement-from-user-year-month',
  templateUrl: './deplacement-from-user-year-month.component.html',
  styleUrls: ['./deplacement-from-user-year-month.component.css']
})
export class DeplacementFromUserYearMonthComponent implements OnInit {

  deplacements: any;
  userId: number;
  year: number;
  month: number;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.paramMap.get('user');
    this.year = +this.route.snapshot.paramMap.get('year');
    this.month = +this.route.snapshot.paramMap.get('month');
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:8000/api/byUserYearMonth/' + this.userId + '/'+this.year+'/'+this.month, { responseType: 'json' }).subscribe(
      (response) => {
        console.log(response);
        this.deplacements = response;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }


}
