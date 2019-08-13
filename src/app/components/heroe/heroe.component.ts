import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
    this.heroe = _heroeService.getHeroesById( params['id']);
    });
  }

  ngOnInit() {
  }

}
