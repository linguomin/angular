import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo06',
    templateUrl: './demo06.component.html'
})

export class Demo06Component implements OnInit {
    constructor() { }
    ngOnInit() { }
    handleClick(){
        alert("btn is clicked")
    }
}