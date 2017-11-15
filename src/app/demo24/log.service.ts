import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    isDev:boolean=true;

    constructor() { }
    mylog(msg:any){
        if(this.isDev){
        console.log(msg);
    }else
         return
}
}