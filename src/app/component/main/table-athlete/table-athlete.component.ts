import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {AthleteDataService} from '../../../service/athlete-data.service';
import {Athlete} from '../../../class/athlete';
import {RouterLink} from '@angular/router';
import {PaginationComponent} from '../pagination/pagination.component';


@Component({
  selector: 'app-table-athlete',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    PaginationComponent
  ],
  templateUrl: './table-athlete.component.html',
  styleUrl: './table-athlete.component.css'
})
export class TableAthleteComponent implements OnInit {
  private _athletes: Athlete[] = [];
  private _size = 25;
  private _page = 0;
  private _totalPages = 0;

  constructor(private athleteServiceService: AthleteDataService) {
  }

  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get athletes(): Athlete[] {
    return this._athletes;
  }

  set athletes(value: Athlete[]) {
    this._athletes = value;
  }

  ngOnInit(): void {
    this.loadAthlete(this.page, this.size);
  }

  loadAthlete(page: number, size: number) {
    this.athleteServiceService.getAthletes(page, size).subscribe(data => {
      this.totalPages = data.athletes.totalPages;
      this.athletes = data.athletes.content;
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this.loadAthlete(this.page,this.size);  // Завантаження атлетів для нової сторінки
  }
}
