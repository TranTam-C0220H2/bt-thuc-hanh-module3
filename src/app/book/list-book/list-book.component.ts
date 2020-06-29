import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  listBook;
  constructor(private booService: BookService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.booService.index().subscribe(result => {
      this.listBook = result;
    });
    this.searchService.searchInput.subscribe( keywords => {
      this.listBook = this.listBook
        .filter( item => item.title.toLowerCase().includes(keywords.toLowerCase()) );
    });
  }

}
