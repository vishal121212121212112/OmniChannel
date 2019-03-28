import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit {

  data:number=100;
  constructor() {
      console.log(`new - data is ${this.data}`);
  }
  ngOnChanges() {
      console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit() {
      console.log(`ngOnInit  - data is ${this.data}`);
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
  fnAddNumber():void{
      this.data+=100;
  }
  deleteNumber():void{
      this.data -=10;
  }

}
