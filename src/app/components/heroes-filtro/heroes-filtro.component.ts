import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-filtro',
  templateUrl: './heroes-filtro.component.html'
})
export class HeroesFiltroComponent implements OnInit {

  heroes: any [];
  title: string ;
  titleSmall: string;
  titleBtn: string;


  constructor(private activatedRoute: ActivatedRoute , private router: Router, 
              private _heroesService: HeroesService) {

    this.title = 'Marvel';
    this.titleSmall = 'DC -Marvel';
    this.titleBtn = 'Ver más...';
  }

  verHeroe( i: number) {
    this.router.navigate( ['/heroe', i] );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let texto: string = params['heroes'];
      this.heroes = this._heroesService.getHeroeByName( texto );
   });
  }

}
