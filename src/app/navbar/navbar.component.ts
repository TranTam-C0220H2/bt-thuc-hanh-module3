import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(event) {
    const keywords = event.target.value;
    this.searchService.searchInput.next(keywords);
  }

}
