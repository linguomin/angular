import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo08',
    templateUrl: './demo08.component.html'
})

export class Demo08Component implements OnInit {
    imgUrl:string="img/1.jpg";
    linkUrl:string="http://www.baidu.com";
    myValue:string="value";
    myResult:string="hello world";
    myName:string="";
    constructor() { }
    ngOnInit() { }
    output(data:any){
        console.log(data);
    }
}