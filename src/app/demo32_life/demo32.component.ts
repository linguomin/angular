import { Component, OnInit } from '@angular/core';
import { setImmediate } from 'timers';

@Component({
    selector: 'demo32',
    template:     `
        <h1>demo32</h1>
        <demo33 [myNumber]="count" *ngIf="count<5" [myStu]="stu"></demo33>
    `
})

export class Demo32Component implements OnInit {
    count:number=0;
    timer:any;
    stu:Object={name:'kee',age:'25'}
    constructor() { }

    ngOnInit() { 
        this.timer=setInterval(() => {
            this.count++;
            this.stu.age++;
            console.log(this.count)
        }, 1000);
    }

}