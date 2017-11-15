import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './myhttp.service';

@Component({
    selector: 'demo26',
    template: `
        <h1>这是http服务案例</h1>
        <ul>
            <li *ngFor="let item of myList">{{item.uname}}</li>
        </ul>
        <button (click)="loadMore()">加载更多</button>
    `
})

export class Demo26Component implements OnInit {
    //myList:Array<any>=[];
    myList:number[]=[];
    constructor(private myHttp:MyHttpService) { }
    ngOnInit() { }
    loadMore(){
        this.myHttp.sendRequest("http://127.0.0.1/list.php").subscribe((result:any)=>{
               this.myList=result;
        })
    }
}