import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-deplacement-from-user',
  templateUrl: './deplacement-from-user.component.html',
  styleUrls: ['./deplacement-from-user.component.css']
})
/**
 * Requests all Deplacements from a certain user, given by its id in the url
 */
export class DeplacementFromUserComponent implements OnInit {
  deplacements: any;
  userId: number;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.paramMap.get('user');//get user id from url
  }

  ngOnInit() {
    this.httpClient.get('http://127.0.0.1:8000/api/byUser/' + this.userId, { responseType: 'json' }).subscribe(
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
