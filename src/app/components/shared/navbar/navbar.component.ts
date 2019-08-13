import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes: any[] ;

  constructor( private _heroeService: HeroesService, private router: Router ) { }

  ngOnInit() {
  }

  buscarHeroe( texto: string ) {
   this.router.navigate( ['/heroes-filtro', texto] );
  }
}
