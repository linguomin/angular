import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
    providers:[LogService],
    selector: 'demo24',
    template: `
        <h1>这是和服务相关的案例</h1>
        <button (click)="handleClick()" >clickme</button>
    `
})

export class Demo24Component implements OnInit {
    constructor(private myLog:LogService) { }

    ngOnInit() { }
    handleClick(){
        this.myLog.mylog('user money:100000000');
    }
}