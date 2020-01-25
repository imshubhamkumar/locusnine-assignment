import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { UserService } from '../user.service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elements: any = [];
  previous: any = [];
  searchText: string = '';

  headElements = ['NAME', 'EMAIL', 'ROLL TYPE', 'STATUS'];
  userDetails = [];
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @HostListener('input') oninput() {this.searchItems(); }
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersDetails().subscribe(
      data => {
        this.userDetails = data;
        this.mdbTable.setDataSource(this.userDetails);
        this.elements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      }
    );
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.userDetails = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.userDetails = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

}
