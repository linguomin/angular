import { MyService } from './myservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'demo30',
    template: `
        <h1>这是demo30</h1>
        <button (click)="handle()" >读取服务中的数据</button>
        <ul>
            <li *ngFor="let item of List">{{item}}</li>
        </ul>
    `
})

export class Demo30Component implements OnInit {
    List:any[]=[];
    constructor(private myservice:MyService) { }

    ngOnInit() { }
    handle(){
        console.log(this.myservice.list)
        this.List=this.myservice.list;
        console.log(this.List);
    }
}