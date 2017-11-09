import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Demo01Component }  from './demo01/demo01.compoent';
import { Demo02Component }  from './demo02/demo02.component';
import { Demo03Component }  from './demo03/demo03.component';
import { Demo04Component }  from './demo04/demo04.component';
import { Demo05Component }  from './demo05/demo05.component';
import { Demo06Component }  from './demo06/demo06.component';
import { Demo07Component }  from './demo07/demo07.component';
import { MyInputComponent }  from './demo07/myinput.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,Demo01Component,Demo02Component,Demo03Component,Demo04Component,Demo05Component,Demo06Component,Demo07Component,MyInputComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
