import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  add(newauthor) {
    return this._http.post('/authors', newauthor);
  }
  getAuthors () {
    return this._http.get('/authors');
  }
  getAuthor(id) {
    return this._http.get('/authors/'+id);
  }
  update(author) {
    return this._http.put('/authors/' + author._id, author);
  }
  delete(id) {
    return this._http.delete('/authors/' + id);
  }
}
