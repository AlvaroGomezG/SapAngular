import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  title: string ;
  titleSmall: string;
  titleBtn: string;
  data: Heroe [];

  constructor(private _heroesService: HeroesService) {
    this.title = 'Marvel';
    this.titleSmall = 'DC -Marvel';
    this.titleBtn = 'Ver más...';
   }

  ngOnInit() {
   this.data = this._heroesService.getHeroes();
  }

  verHeroe( i: number) {
  console.log(i);
  }

}
