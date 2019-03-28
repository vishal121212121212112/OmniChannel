import { Component, OnInit,Input,Output } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input('joke') data: Joke;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(`ngOnChanges - data is `);
}
}
