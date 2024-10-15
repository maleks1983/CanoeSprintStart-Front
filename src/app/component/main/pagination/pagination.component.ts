import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() itemsPerPage: number = 25;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();
  currentPage: number = 0;
  disable = 'page-link disabled';
  active = 'page-link active';


  setPage(page: number): void {
    this.currentPage = page-1;
    this.pageChange.emit(this.currentPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages-1) {
      this.setPage(this.currentPage+2);
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.setPage(this.currentPage);
    }
  }

}
