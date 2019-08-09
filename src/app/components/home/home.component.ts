import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

NameTitle: string;
Description: string;
Text: string;

  constructor() {
  this.NameTitle = 'Comic App';
  this.Text = 'Marvel - DC';
  this.Description = 'Es una aplicación de superheroes.';
  }

  ngOnInit() {
  }

}
