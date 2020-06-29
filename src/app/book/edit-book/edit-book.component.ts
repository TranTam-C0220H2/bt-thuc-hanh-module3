import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  bookById;
  bookForm;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = activatedRoute.snapshot.params['id'];
    console.log(id);

    this.bookService.getById(id).subscribe((result) => {
      this.bookById = result;
      this.bookForm = new FormGroup({
        title: new FormControl(this.bookById.title),
        author: new FormControl(this.bookById.author),
        description: new FormControl(this.bookById.description),
      });
    });
  }

  edit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const book = this.bookForm.value;
    this.bookService.edit(id, book).subscribe(
      (next) => {
        this.router.navigate(['book']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.router.navigate(['book']);

  }

  ngOnInit(): void {}
}
