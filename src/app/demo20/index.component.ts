import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
    selector: 'index',
    template: `
    <h1>这是首页</h1>
    <button (click)="getCount(mySlides)">获取子组件中轮播图的数量</button>
    <h3 *ngIf="count>0">{{count}}</h3>
    <h3>{{mySlides.slideCount}}</h3>

    <hr>
    <slides #mySlides></slides>
    `
})
export class IndexComponent implements OnInit {
    @ViewChild('mySlides') sonInstance:any;
    count:number=0;
    constructor() { }
    ngOnInit() { 
        console.log(this.sonInstance);
    }
    getCount(id:any){
        console.log(id.slideCount);
        this.count=id.slideCount;
    }
}