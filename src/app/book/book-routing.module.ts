import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';



const routes: Routes = [
  {
    path: 'book',
    component: ListBookComponent
  },
  {
    path: 'book/add',
    component: AddBookComponent
  },
  {
    path: 'book/:id/detail',
    component: DetailBookComponent
  },
   {
     path: 'book/:id/edit',
     component: EditBookComponent
   },
   {
     path: 'book/:id/delete',
     component: DeleteBookComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
