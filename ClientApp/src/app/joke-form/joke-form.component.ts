import { Component, OnInit,EventEmitter ,Output,NgModule} from '@angular/core';
// import { EventEmitter } from 'protractor';
import {Joke} from '../joke';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  joke:Joke = new Joke('setup','punch');
  @Output() jokeCreated = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  SubmitJoke(){
    this.jokeCreated.emit("");
  }
  
}
