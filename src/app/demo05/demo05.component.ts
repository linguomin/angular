import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo05',
    templateUrl: './demo05.component.html'
})

export class Demo05Component implements OnInit {
    uname:string='lucy';
    stuList:Array<Object>=[{score:98,age:18,sex:"女"},{score:98,age:18,sex:"女"},{score:98,age:18,sex:"女"},{score:98,age:18,sex:"女"},{score:75,age:18,sex:"女"},{score:98,age:18,sex:"女"}];
    constructor() { }
    ngOnInit() { }
}