import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<any>();

  terms = {
    text: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  click(): void {
    this.search.emit(this.terms.text);
  }

}
