import { Demo14Component } from './demo14/demo14.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Demo01Component }  from './demo01/demo01.compoent';
import { Demo02Component }  from './demo02/demo02.component';
import { Demo03Component }  from './demo03/demo03.component';
import { Demo04Component }  from './demo04/demo04.component';
import { Demo05Component }  from './demo05/demo05.component';
import { Demo06Component }  from './demo06/demo06.component';
import { Demo07Component }  from './demo07/demo07.component';
import { MyInputComponent }  from './demo07/myinput.component';
import { Demo08Component } from './demo08/demo08.component';
import { Demo09Component } from './demo09/demo09.component';
import { Demo10Component } from './demo10/demo10.component';
import { Demo11Component } from './demo11/demo11.component';
import { TestDirective } from './demo11/test.directive';
import { Demo12Component } from './demo12/demo12.component';
import { Demo13Component } from './demo13/demo13.component';
import { AppRoutingModule } from './app.route';
import { NotFoundComponent } from './404/404.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule],
  declarations: [ AppComponent ,Demo01Component,Demo02Component,Demo03Component,Demo04Component,Demo05Component,Demo06Component,Demo07Component,MyInputComponent,Demo08Component,Demo09Component,Demo10Component,Demo11Component,TestDirective,Demo12Component,Demo13Component,NotFoundComponent,Demo14Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
