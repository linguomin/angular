import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
    selector: 'demo10',
    templateUrl: './demo10.component.html'
})

export class Demo10Component implements OnInit {
    opValue: number = 1;
    constructor() { }
    ngOnInit() { }
    changeOpacity() {
        let m=1;
        let timer = setInterval(() => {
            
                this.opValue =this.opValue-0.1*m;
                    if(this.opValue<=0){
                        m=-1
                    }
            if(this.opValue>1) {
                clearInterval(timer);
            }
            }, 50);
}
}