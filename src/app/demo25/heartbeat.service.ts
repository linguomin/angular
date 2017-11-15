import { Injectable } from '@angular/core';

@Injectable()
export class HeartBeatService {
    time:any;
    isBeat:boolean=true;
    constructor() { }
    start(){
        if(this.isBeat){
       this.time=setInterval(()=>{
           console.log("in heart beat")
       },1000);
        this.isBeat=false
    }else{
           return
       }
    }
    stop(){
        clearInterval(this.time);
        this.isBeat=true;
    }
}