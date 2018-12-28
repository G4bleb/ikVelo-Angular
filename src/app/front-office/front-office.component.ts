import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
// import 'rxjs/add/operator/map';

// import { Deplacement } from "../util/Deplacement";
// import { DeplacementJour } from "../util/DeplacementJour";
@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
export class FrontOfficeComponent implements OnInit {
  // constructor(){}
  // ngOnInit(){}
  constructor(private httpClient: HttpClient) { }
  deplacements: any;
  ngOnInit() {
    this.httpClient.get('http://localhost:8000/api/', { responseType: 'json' }).subscribe(
      (response) => {
        //this.list = response;
        console.log(response);
        // this.list = this.responseSanitizer(response);
        // this.deplacements = this.dateObjectsToDates(response);
        this.deplacements = response;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  private dateObjectsToDates(response: any) {
    for (let i = 0; i < response.length; i++) {
      if (response['dateValidation'] == null){
        response['dateValidation'] = new Array();
        response['dateValidation']['date'] = ' ';
        console.log('yes');
      }
      if (response['created'] == null) {
        response['created'] = new Array();
        response['created']['date'] = ' ';
        console.log('yes');
      }
      if (response['updated'] == null) {
        response['updated'] = new Array();
        response['updated']['date'] = ' ';
        console.log('yes');
      }
    }
    return response;
  }
}

// @Injectable()
// export class RecupdataComponent {
//   constructor(private http: Http) { }
//   valueRetour: any;
//   //methode appelée à chaque appel du composant
//   ngAfterViewInit() {
//     this.doGET();
//   }
//   // methode réalisant l'appel au web service et insérant la réponse
//   // dans une variable définie avant
//   doGET() {
//     console.log("GET");
//     let url = `localhost:8000/api/`;
//     //this.http.get(url).subscribe(res => console.log(res.json()));
//     this.http.get(url).subscribe(res => this.valueRetour = res.json());
//   }
// }