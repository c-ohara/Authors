import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./../app.component.css']
})
export class NewauthorComponent implements OnInit {
  newAuthor: any;
  valmessages: string[];

  constructor(private _httpService: HttpService) {
    this.valmessages = [];
    this.newAuthor = {name: ""};
   }

  ngOnInit() {
  }
  AddAuthor() {
    let observable = this._httpService.add(this.newAuthor);
    observable.subscribe(data => {
      if(data['status'] == false) {
        this.valmessages = data['errors'];
      }
      else { 
        this.valmessages = [];
        this.newAuthor = {name: ""};
      }
    })
  }

}
