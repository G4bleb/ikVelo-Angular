import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
    this.httpClient.get('http://127.0.0.1:8000/api/', { responseType: 'json' }).subscribe(
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