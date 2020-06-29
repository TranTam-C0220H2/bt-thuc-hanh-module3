import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  delete() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bookService.delete(id).subscribe(next => {
      this.router.navigate(['book']);
    })
  }

  cancle() {
    this.router.navigate(['book']);
  }
}
