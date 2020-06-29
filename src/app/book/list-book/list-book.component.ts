import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  listBook;
  constructor(private booService: BookService) { }

  ngOnInit(): void {
    this.booService.index().subscribe(result => {
      this.listBook = result;
    })
  }

}
