import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../app.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromHttp();
  }
  getAuthorsFromHttp() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      if (data['status'] == false) {
        console.log(data['errors']);
      }
      else {
        this.allAuthors = data['allAuthors'];
      }
    })
  }
  Delete(id) {
    let observable = this._httpService.delete(id);
    observable.subscribe(data => {
      this.getAuthorsFromHttp();
    })
  }
}
