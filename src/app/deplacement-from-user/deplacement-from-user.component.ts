import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-deplacement-from-user',
  templateUrl: './deplacement-from-user.component.html',
  styleUrls: ['./deplacement-from-user.component.css']
})
export class DeplacementFromUserComponent implements OnInit {

  deplacements: any;
  userId: number;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.paramMap.get('user');
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:8000/api/byUser/' + this.userId, { responseType: 'json' }).subscribe(
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
