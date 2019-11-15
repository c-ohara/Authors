import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./../app.component.css']
})
export class EditauthorComponent implements OnInit {
  currentAuthor: any;
  valmessages: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.valmessages = [];
      let observable = this._httpService.getAuthor(params['id']);
      observable.subscribe(data => {
        if (data['status']) {
          console.log(data);
          this.currentAuthor = data['currentAuthor'];
        }
        else {
          console.log(data['errors']);
        }
      })
    })
  }
  EditAuthor() {
    let observable = this._httpService.update(this.currentAuthor);
    observable.subscribe(data => {
      if(data['status'] == false) {
        this.valmessages = data['errors'];
      }
      else {
        this._router.navigate(['/']);
      }
    })
  }


}
