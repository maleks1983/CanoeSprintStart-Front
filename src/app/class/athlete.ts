class Trainers {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

}

export class Athlete {
  id: number;
  name: string;
  surname: string
  birthDateYear: number;
  city: string;
  school: string;
  rang: string
  trainers: Trainers[] = [];


  constructor(id: number, name: string, surname: string, birthDateYear: number, city: string, school: string, rank: string, trainers: Trainers[]) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthDateYear = birthDateYear;
    this.city = city;
    this.school = school;
    this.rang = rank;
    this.trainers = trainers;
  }

}
