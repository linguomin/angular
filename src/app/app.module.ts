import { HttpModule } from '@angular/http';
import { Demo24Component } from './demo24/demo24.component';
import { DashComponent } from './demo16/dashboard.component';
import { CheckComponent } from './demo15/check.component';
import { Demo14Component } from './demo14/demo14.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.compoent';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';
import { Demo07Component } from './demo07/demo07.component';
import { MyInputComponent } from './demo07/myinput.component';
import { Demo08Component } from './demo08/demo08.component';
import { Demo09Component } from './demo09/demo09.component';
import { Demo10Component } from './demo10/demo10.component';
import { Demo11Component } from './demo11/demo11.component';
import { TestDirective } from './demo11/test.directive';
import { Demo12Component } from './demo12/demo12.component';
import { Demo13Component } from './demo13/demo13.component';
import { AppRoutingModule } from './app.route';
import { NotFoundComponent } from './404/404.component';
import { PayComponent } from './demo15/pay.component';
import { SendComponent } from './demo15/send.component';
import { LoginComponent } from './demo16/login.component';
import { MailComponent } from './demo17/mail.component';
import { InboxComponent } from './demo17/inbox.component';
import { OutboxComponent } from './demo17/outbox.component';
import { ParentComponent } from './demo18/parent.component';
import { SonComponent } from './demo18/son.component';
import { MainComponent } from './demo19/mymain.component';
import { HeaderComponent } from './demo19/myheader.component';
import { IndexComponent } from './demo20/index.component';
import { SlidesComponent } from './demo20/slides.somponent';
import { CartComponent } from './demo21/cart.component';
import { OrderConfirmComponent } from './demo21/orderconfiirm.component';
import { Step1Component } from './demo21/step1.component';
import { Step2Component } from './demo21/step2.component';
import { OrderHeaderComponent } from './demo21/orderheader.component';
import { Demo22Component } from './demo22/demo22.component';
import { Demo23Component } from './demo23/demo23.component';
import { MyCurrencyPipe } from './demo23/mycurrency.pipe';
import { SexChangePipe } from './demo23/sex.pipe';
import { LogService } from './demo24/log.service';
import { HeartBeatService } from './demo25/heartbeat.service';
import { Demo25Component } from './demo25/demo25.component';
import { Demo26Component } from './demo26_http/demo26.component';
import { MyHttpService } from './demo26_http/myhttp.service';
import { Demo28Component } from './demo28_customdirective/demo28.component';
import { ChangeBgDirective } from './demo28_customdirective/changebg.directive';
import { MyService } from './demo29_service/myservice.service';
import { Demo29Component } from './demo29_service/demo29.component';
import { Demo30Component } from './demo29_service/demo30.component';
import { Demo31Component } from './demo31_guard/demo31.component';
import { MyGuard } from './demo31_guard/myguard.service';
import { Demo32Component } from './demo32_life/demo32.component';
import { Demo33Component } from './demo32_life/demo33.component';
import { Demo34Component } from './demo34_carsouel/demo34.component';
import { Carousel } from './demo34_carsouel/carousel.component';
import { Slide } from './demo34_carsouel/slide.component';

@NgModule({
  providers:[LogService,HeartBeatService,MyHttpService,MyGuard],
  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpModule],
  declarations: [AppComponent, Demo01Component, Demo02Component, Demo03Component, Demo04Component, Demo05Component, Demo06Component, Demo07Component, MyInputComponent, Demo08Component, Demo09Component, Demo10Component, Demo11Component, TestDirective, Demo12Component, Demo13Component, NotFoundComponent, Demo14Component, CheckComponent, PayComponent, SendComponent,DashComponent,LoginComponent,MailComponent,InboxComponent,OutboxComponent,ParentComponent,SonComponent,MainComponent,HeaderComponent,IndexComponent,SlidesComponent,CartComponent,OrderConfirmComponent,Step1Component,Step2Component,OrderHeaderComponent,Demo22Component,Demo23Component,MyCurrencyPipe,SexChangePipe,Demo24Component,Demo25Component,Demo26Component,Demo28Component,ChangeBgDirective,Demo29Component,Demo30Component,Demo31Component,Demo32Component,Demo33Component,Demo34Component,Carousel,Slide],
  bootstrap: [AppComponent]
})
export class AppModule { }
