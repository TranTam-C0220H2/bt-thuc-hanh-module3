import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    author: new FormControl('', [Validators.required, Validators.minLength(10)]),
    description: new FormControl('', [Validators.required, Validators.minLength(100)])
  });
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }
  create() {
    let book = this.bookForm.value;
    this.bookService.add(book).subscribe(next => {
      this.router.navigate(['book']);
    })
  }

  cancel() {
    this.router.navigate(['book']);
  }

}
