    import { Directive,ElementRef ,OnInit,Input} from '@angular/core';


@Directive({ selector: '[changebg]' })
export class ChangeBgDirective implements OnInit  {
    @Input() changebg:string;
    constructor(private myElRef:ElementRef) { 
        console.log("在自定义组件中构造函数");

    }
    ngOnInit(){
        var element=this.myElRef.nativeElement;
        element.style.backgroundColor=this.changebg;
    }
}