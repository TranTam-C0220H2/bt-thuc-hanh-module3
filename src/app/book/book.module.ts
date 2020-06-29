import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [ListBookComponent, AddBookComponent, DetailBookComponent, EditBookComponent, DeleteBookComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BookRoutingModule,
  ]
})
export class BookModule { }
