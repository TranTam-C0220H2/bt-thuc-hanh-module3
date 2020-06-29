import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(this.API_URL);
  }

  getById(id) {
    return this.http.get(this.API_URL + '/' + id);
  }

  add(book) {
    return this.http.post(this.API_URL, book);
  }

  delete(id) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  edit(id, book) {
    return this.http.put(this.API_URL + '/' + id, book);
  }
}
