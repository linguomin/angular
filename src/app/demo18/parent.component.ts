import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html'
})

export class ParentComponent implements OnInit {
    sonName:string="张三";
    constructor() { }
    ngOnInit() { }
    rcvMsg(data:any){
        console.log("父组件接受到的子组件的数据为"+data);
    }
}