import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TrainerDataService} from '../../../service/trainer-data.service';
import {ActivatedRoute} from '@angular/router';
import {range} from 'rxjs';

class AthleteTO {
  id: number;
  surname: string;
  name: string;
  birthDateYear: number;


  constructor(id: number, surname: string, name: string, birthDateYear: number) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.birthDateYear = birthDateYear;
  }
}

@Component({
  selector: 'app-table-trainer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table-trainer.component.html',
  styleUrl: './table-trainer.component.css'
})
export class TableTrainerComponent implements OnInit {

  private _id = 1;
  private _name = '';
  private _athletes: AthleteTO[] = [];
  private _size = 25;
  private _page = 0;

  constructor(private trainerDataService: TrainerDataService, private route: ActivatedRoute) {
  }

  get athletes(): AthleteTO[] {
    return this._athletes;
  }

  set athletes(value: AthleteTO[]) {
    this._athletes = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.get('id') !== null) {
        this.id = Number.parseInt(<string>paramMap.get('id'));
      } else this.id = 0;
    })
    if (this.id !== 0) {
      this.loadAthlete(this.page, this.size, this.id);
    }

  }

  loadAthlete(page:number, size:number, id: number) {
    this.trainerDataService.getAthletesByTrainerId(page,size,id).subscribe(data => {
      this.name = data.trainer.name;
      this.athletes = data.trainer.athletes;
    });
  }

}


