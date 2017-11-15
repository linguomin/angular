import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice.service';

@Component({
    providers:[MyService],
    selector: 'demo29',    
    template: `
        <h1>demo29</h1>
        <button (click)="handle()">向服务的数组中插入数据</button>
        <hr>
        <demo30></demo30>
    `
})

export class Demo29Component implements OnInit {
    constructor(private myservice:MyService) { }

    ngOnInit() { }
    handle(){
        this.myservice.list.push(100);
    }
}