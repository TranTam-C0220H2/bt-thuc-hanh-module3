import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './book/list-book/list-book.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { DetailBookComponent } from './book/detail-book/detail-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'book',
    component: ListBookComponent,
  },
  // {
  //   path: 'book/list',
  //   component: ListBookComponent,
  // },
  {
    path: 'book/add',
    component: AddBookComponent,
  },
  {
    path: 'book/:id/detail',
    component: DetailBookComponent,
  },
  {
    path: 'book/:id/edit',
    component: EditBookComponent,
  },
  {
    path: 'book/:id/delete',
    component: DeleteBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
