import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import {Joke} from '../joke';
@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];

  constructor() { 
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
    ];    
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is`);
  }
  addJoke(event)
  {
    this.jokes.push(new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"));
    ;  
  }

  

ngDoCheck() {
    console.log("ngDoCheck")
}
ngAfterContentInit() {
    console.log("ngAfterContentInit");
}
ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
}
ngAfterViewInit() {
    console.log("ngAfterViewInit");
}
ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
}
ngOnDestroy() {
    console.log("ngOnDestroy");
}

}
