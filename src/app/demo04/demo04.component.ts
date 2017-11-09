import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo04',
    templateUrl: './demo04.component.html'
})

export class Demo04Component implements OnInit {
  isMember:boolean=true;
  rightAnswer:string="a";
    constructor() { }
    
    ngOnInit() { }
}