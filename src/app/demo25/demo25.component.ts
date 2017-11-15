import { Component, OnInit } from '@angular/core';
import { HeartBeatService } from './heartbeat.service';

@Component({
    selector: 'demo25',
    template: `
        <h1>心跳服务案例</h1>
        <button (click)="startHeart()" >start</button>
        <button  (click)="stopHeart()">stop</button>
    `
})

export class Demo25Component implements OnInit {
    constructor(private myHeart:HeartBeatService) { }

    ngOnInit() { }
    startHeart(){
        this.myHeart.start();
    }
    stopHeart(){
        this.myHeart.stop();
    }
}