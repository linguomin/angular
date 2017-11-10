import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'demo14',
    templateUrl: './demo14.component.html'
})

export class Demo14Component implements OnInit {
    rcvMsg:string=""
    constructor(private  myRoute:ActivatedRoute) { }

    ngOnInit() {
        console.log(this.myRoute.params);
        this.myRoute.params.subscribe((result:any)=>{
            console.log(result);
            this.rcvMsg=result.uname;
        })
     }
}