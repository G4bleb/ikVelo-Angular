import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import * as Constants from '../utils/globals';
@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
/**
 * Requests all Deplacements
 */
export class FrontOfficeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  deplacements: any;
  ngOnInit() {
    this.httpClient.get(Constants.apiUrl + '/api/', { responseType: 'json' }).subscribe(
      (response) => {
        console.log(response);
        this.deplacements = response;
      },
      (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
}