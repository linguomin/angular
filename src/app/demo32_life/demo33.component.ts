import { Component, OnInit, OnDestroy, OnChanges, Input,DoCheck } from '@angular/core';

@Component({
    selector: 'demo33',
    template: `
        <h1>demo33</h1>
        <p>{{myNumber}}</p>
        <p>{{myStu.age}}</p>
    `
})

export class Demo33Component implements OnInit, OnDestroy, OnChanges ,DoCheck {
    @Input()myNumber:number
    @Input()myStu:Object
    constructor() {
        console.log('demo33 constructor')
    }

    ngOnChanges() {
        console.log('demo33 onChanges')
    }
    ngOnInit() {
        console.log('demo33 onInit')
    }
    
    ngDoCheck(){
        console.log('demo33 doCheack')
    }

    ngOnDestroy() {
        console.log('demo33 onDestroy')
    }


}