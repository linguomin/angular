import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'son',
    templateUrl: './son.component.html'
})

export class SonComponent implements OnInit {
    // @Input() myName: string = "";
    @Input('myName ') uname: string = "";
    @Output() CustomEvent = new EventEmitter();

    constructor() { }

    ngOnInit() { }
    
    triggerEvent() {
        this.CustomEvent.emit('用户已登录');
    }
}