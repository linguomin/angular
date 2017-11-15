import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main',
    template: `
        <h1>main组件</h1>
        <myheader (CustomEvent)="rcvMsg($event)" [myVersion]="version"></myheader>
        <ul *ngIf="islogin">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        </ul>
    `
})

export class MainComponent implements OnInit {
    islogin:boolean=false;
    version:string="1.0";
    constructor() { }

    ngOnInit() { }
    rcvMsg(data:boolean){
        this.islogin=data;
    }

}