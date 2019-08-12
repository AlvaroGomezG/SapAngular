import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  title: string ;
  titleSmall: string;
  titleBtn: string;
  data: Heroe [];


  constructor(private _heroesService: HeroesService, private router: Router ) {
    this.title = 'Marvel';
    this.titleSmall = 'DC -Marvel';
    this.titleBtn = 'Ver más...';
   }

  ngOnInit() {
   this.data = this._heroesService.getHeroes();
  }

  verHeroe( i: number) {
    this.router.navigate( ['/heroe', i] );
  }

}
