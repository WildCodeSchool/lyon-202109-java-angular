import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonAPIService} from '../../api/pokemon-api.service';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.css'],
})
export class PokemonDetailPageComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.pokemon = data.pokemon;
    });
  }

}
