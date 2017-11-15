import { Component, OnInit ,Input ,Output , EventEmitter} from '@angular/core';

@Component({
    selector: 'myheader',
    template:  `
        <h1>header组件</h1>
        <h3>版本号为{{myVersion}}</h3>
        <button (click)="toggle()">点击</button>
    `
})

export class HeaderComponent implements OnInit {
    @Input() myVersion:string="";
    @Output() CustomEvent=new EventEmitter();
    isUserLogin:boolean=false;
    constructor() { }

    ngOnInit() { 
        this.CustomEvent.emit(this.isUserLogin) 
    }
    toggle(){
        this.isUserLogin=this.isUserLogin?false:true;
        this.CustomEvent.emit(this.isUserLogin) 
    }
}